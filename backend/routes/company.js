var express = require('express');
var router = express.Router();

// Returns list of companys
router.get('/', function(req, res, next) {

});

// Returns a single company
router.get('/:id', function(req, res, next) {
  let companyID = req.params.id;

});

// Returns all companys of a specific service
router.get('/service/:service', function (req, res, next) {
  let service = req.params.service;

});

router.get('/requests/:service', function(req, res, next) {

});

module.exports = router;
