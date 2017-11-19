var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config');

var User = require("../models/User");

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function (req, res) {
  User.register(new User({ email: req.body.email }), req.body.password, function (err, user) {
    if (err) {
      return res.status(400).send({ error: 'Email address in use.' })
    }
    res.status(200).send({ user: user.id });
  });
});

router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    if (user) {
      var token = jwt.sign({ id: user._id, email: user.email }, config.jwt.secret);
      return res
        .status(200)
        .json({ token });
    }
  })(req, res, next);
});

module.exports = router;
