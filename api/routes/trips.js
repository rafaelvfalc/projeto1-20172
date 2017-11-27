var express = require('express');
var router = express.Router();
var controller = require('../controllers/trips')

router.post('/', controller.create_trip);
router.get('/', controller.list_all_trips);

module.exports = router;