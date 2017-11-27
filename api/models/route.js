'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RouteSchema = new Schema({
  origin: {
    type: String,
    required: 'Kindly enter the origin'
  },
  destination: {
    type: String,
    required: 'Kindly enter the destination'
  },
  duration: {
    type: Number,
    required: 'Kindly enter the duration'
  }
});

module.exports = mongoose.model('Route', RouteSchema);