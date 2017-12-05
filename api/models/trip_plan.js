'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TripPlanSchema = new Schema({
    _route: {
        type: Schema.Types.ObjectId,
        ref: 'Route'
    },
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
    }
});

var TripPlan = module.exports = mongoose.model('TripPlan', TripPlanSchema);

// Cria um trip plan e salva no bd a entrada é um objeto trip plan e a função callback
module.exports.createTripPlan = function(newTripPlan, callback){
          newTripPlan.save(callback);
}
// Acha um trip plan passando o id da rota e a função callback
module.exports.getTripPlanByRoute = function(route_id, callback){
  var query = {route: route_id};
  TripPlan.find(query, callback);

}


module.exports = mongoose.model('TripPlan', TripPlanSchema);
