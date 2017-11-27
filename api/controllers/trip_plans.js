'use strict';

var passport = require('passport');
var mongoose = require('mongoose');

require('../models/trip_plan');
var TripPlan = mongoose.model('TripPlan');

exports.create_trip_plan = function (req, res, next) {
    passport.authenticate('jwt', function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }
      if (user) {
        TripPlan.create(
            {
                _route: req.body.route, 
                _bus: req.body.bus, 
                day: req.body.day,
                hour: req.body.hour,
                weekly: req.body.weekly,
                holiday: req.body.holiday,
                enabled: req.body.enabled
            }, function (err, trip_plan) {
          if (err) {
            return res.status(400).send({ error: err })
          }
          res.status(200).send(trip_plan);
        });
      }
    })(req, res, next);
}

exports.list_all_trip_plans = function (req, res, next) {
  passport.authenticate('jwt', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    if (user) {
      TripPlan.find({}, function(err, trip_plans) {
        if (err)
          res.send(err);
        res.json(trip_plans);
      });
    }
  })(req, res, next);
}