var express = require('express');
var router = express.Router();
var controller = require('../controllers/trips')



router.post('/', controller.create_trip);
router.get('/', controller.list_all_trips);
router.get('/origin', controller.search_by_origin);
router.get('/dest', controller.search_by_origin_dest);
router.get('/weekly', controller.search_by_weekly);

module.exports = router;
