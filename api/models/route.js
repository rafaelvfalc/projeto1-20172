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

var Route = module.exports = mongoose.model('Route', RouteSchema);

// cria a rota, a entrada é um objeto de rota e a função callback, salva no bd
module.exports.createRoute = function(newRoute, callback){
          newRoute.save(callback);
}

// Procura rotas pela origem e destino, retorna todas do banco, pode ser alterada depois 
// para retornar apenas as n primeiras de acordo com algum parametro
// as entradas são a origem (str) e o destino (str) e a função callback
module.exports.getRouteByOrginDest = function(origin, destination, callback){
  var query = {origin: origin, destination: destination};
  Route.find(query, callback);
}

//Procura rota pelo seu id
module.exports.getRouteById = function(id, callback){
  Route.findById(id, callback);
}


module.exports = mongoose.model('Route', RouteSchema);