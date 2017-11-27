var express = require('express');
var router = express.Router();
var controller = require('../controllers/trip_plans')

router.post('/', controller.create_trip_plan);
router.get('/', controller.list_all_trip_plans);

module.exports = router;