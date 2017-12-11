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
                _bus: req.body.bus, 
                day: req.body.day,
                hour: req.body.hour,
                weekly: req.body.weekly,
                holiday: req.body.holiday,
                enabled: req.body.enabled, 
                date: req.body.date,
                origin: req.body.from, 
                destination: req.body.to, 
                duration: req.body.duration

            }, function (err, trip) {
          if (err) {
            return res.status(400).send({ error: err })
          }
          res.status(200).send(trip);
        });
      }
    })(req, res, next);
}

// pesquisa base p/ n repetir código 
simple_search = function(req, res, next, query){
  Trip.find(query, function(err, trips) {
    if (err)
        res.send(err);
        res.json(trips);
      });
    
  (req, res, next);
}
}

// Inicio das funções de pesquisa

// busca pela origem
exports.search_by_origin = function(req, res, next){
  var query = {origin: req.params.from};
  simple_search(req, res, next, query);
}

//busca uma viagem pela data
exports.search_by_date = function(req, res, next){
  var query = {date: req.params.date};
  simple_search(req, res, next, query);
}

// Data + origem
exports.search_by_date_origin = function(req, res, next){
  var query = {date: req.params.date, origin: req.params.from};
  simple_search(req, res, next, query);
}

// Origem + Destino
exports.search_by_origin_dest = function(req, res, next){
  var query = {origin: req.params.from, destination: req.params.to};
  simple_search(req, res, next, query);
}

// Data + Origem + Destino
exports.search_by_date_origin_dest = function(req, res, next){
  var query = {origin: req.params.from, destination: req.params.to, date: req.params.date};
  simple_search(req, res, next, query);
}

// Apenas semanais
exports.search_by_weekly = function(req, res, next){
  var query = {weekly: true};
  simple_search(req, res, next, query);
}

// Apenas Feriados
exports.search_by_holiday = function(req, res, next){
  var query = {holiday: true};
  simple_search(req, res, next, query);
}

// Disponiveis todos os dias
exports.search_by_alldays = function(req, res, next){
  var query = {weekly: true, holiday: true};
  simple_search(req, res, next, query);
}

// Semanais origem + destino
exports.search_by_weekly_origin_dest = function(req, res, next){
  var query = {weekly: true, origin: req.params.from, destination: req.params.to};
  simple_search(req, res, next, query);
}

// Feriados origem + destino
exports.search_by_holiday_origin_dest = function(req, res, next){
  var query = {holiday: true, origin: req.params.from, destination: req.params.to};
  simple_search(req, res, next, query);
}

// todos os dias origem + destino
exports.search_by_alldays_origin_dest = function(req, res, next){
  var query = {weekly: true, holiday: true, origin: req.params.from, destination: req.params.to};
  simple_search(req, res, next, query);
}

// listar todos
exports.list_all_trips = function (req, res, next) {
      Trip.find({}, function(err, trips) {
        if (err)
          res.send(err);
        res.json(trips);
      });
    }
  (req, res, next);
}

