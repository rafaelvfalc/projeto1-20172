'use strict';

var passport = require('passport');
var mongoose = require('mongoose');

require('../models/trip');
var Trip = mongoose.model('Trip');

exports.create_trip = function (req, res, next) {
    passport.authenticate('jwt', function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }
      if (user) {
        Trip.create(
            {
                _trip_plan: req.body.trip_plan, 
                date: req.body.date
            }, function (err, trip) {
          if (err) {
            return res.status(400).send({ error: err })
          }
          res.status(200).send(trip);
        });
      }
    })(req, res, next);
}

exports.list_all_trips = function (req, res, next) {
  passport.authenticate('jwt', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    if (user) {
      Trip.find({}, function(err, trips) {
        if (err)
          res.send(err);
        res.json(trips);
      });
    }
  })(req, res, next);
}