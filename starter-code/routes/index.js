var express = require('express');
var authRoutes = express.Router();
const passport = require("passport");
const mongoose = require('mongoose');


authRoutes.get('/', function(req, res, next) {
  res.render('index', { title: 'IronTrips' });
});

authRoutes.get("/auth/facebook", passport.authenticate("facebook"));
authRoutes.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect: "/private-page",
  failureRedirect: "/"
}));


module.exports = authRoutes;
