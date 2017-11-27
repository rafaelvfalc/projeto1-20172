'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BusSchema = new Schema({
  model: {
    type: String,
    required: 'Kindly enter the model'
  },
  seat_map: {
    data: Buffer, 
    contentType: String
  },
  seats: [{type: String}]
});

module.exports = mongoose.model('Bus', BusSchema);