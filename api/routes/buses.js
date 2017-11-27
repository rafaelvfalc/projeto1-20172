var express = require('express');
var router = express.Router();
var controller = require('../controllers/buses')

router.post('/', controller.create_bus);
router.get('/', controller.list_all_buses);

module.exports = router;