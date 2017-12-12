'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TripSchema = new Schema({
    _bus: {
        type: Schema.Types.ObjectId,
        ref: 'Bus'
    },
    day: {
        type: Number,
        min: 0,
        max: 6
    },
    hour: Date,
    weekly: Boolean,
    holiday: Boolean,
    enabled: {
        type: Boolean,
        default: true
    },
    date: Date,
    origin: {
    type: String
  },
    destination: {
    type: String
  },
    duration: {
    type: Number
}
});


module.exports = mongoose.model('Trip', TripSchema);

