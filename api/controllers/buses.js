'use strict';

var passport = require('passport');
var mongoose = require('mongoose');

require('../models/bus');
var Bus = mongoose.model('Bus');

exports.create_bus = function (req, res, next) {
    passport.authenticate('jwt', function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }
      if (user) {
        Bus.create({ model: req.body.model, seat_map: req.body.seat_map, seats: req.body.seats }, function (err, bus) {
          if (err) {
            return res.status(400).send({ error: err })
          }
          res.status(200).send(bus);
        });
      }
    })(req, res, next);
}

// query = dbSchemas.SomeValue.find({}).select('name -_id');

exports.list_all_buses = function (req, res, next) {
  passport.authenticate('jwt', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    if (user) {
      Bus.find({}, function(err, buses) {
        if (err)
          res.send(err);
        res.json(buses);
      });
    }
  })(req, res, next);
}

simple_search = function (req, res, next, query) {
  passport.authenticate('jwt', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    if (user) {
      Bus.find(query, function(err, buses) {
        if (err)
          res.send(err);
        res.json(buses);
      });
    }
  })(req, res, next);
}
