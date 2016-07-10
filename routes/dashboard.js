var express = require('express');
var router = express.Router();

var dashboardController = require('../controller/dashboard-controller');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/me', dashboardController.me);

module.exports = router;
