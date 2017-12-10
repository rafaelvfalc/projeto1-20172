var express = require('express');
var router = express.Router();
var controller = require('../controllers/trips')
var controllerR = require('../controllers/routes')
var controllerP = require('../controllers/trip_plans')




router.post('/', controller.create_trip);
router.get('/', controller.list_all_trips);

module.exports = router;
