'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TripSchema = new Schema({
    _trip_plan: {
        type: Schema.Types.ObjectId,
        ref: 'TripPlan'
    },
    date: Date
});

var Trip = module.exports = mongoose.model('Trip', TripSchema);

//função que cria viagem e a salva no bd, os param são um objeto Trip e a função callback
module.exports.createTrip = function(newTrip, callback){
	        newTrip.save(callback);
}
//busca uma viagem pelo id do trip plan, recebe o id e a função callback  
module.exports.getTripByPlan =  function(plan_id, callback){
  var query = {trip_plan: plan_id};
  Trip.find(query, callback);

}
//busca uma viagem pelo id do trip plan e a data  
module.exports.getTripByPlanDate =  function(plan_id, date, callback){
  var query = {trip_plan: plan_id, date: date};
  Trip.find(query, callback);

}

// busca uma viagem pelo seu id
module.exports.getTripById = function(id, callback){
	Trip.findById(id, callback);
}


module.exports = mongoose.model('Trip', TripSchema);

