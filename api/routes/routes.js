var express = require('express');
var router = express.Router();
var controller = require('../controllers/routes')

router.post('/', controller.create_route);
router.get('/', controller.list_all_routes);

module.exports = router;