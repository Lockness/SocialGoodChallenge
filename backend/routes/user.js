var express = require('express');
var router = express.Router();

// Returns list of companys
router.get('/', function(req, res, next) {

});

// Returns a single company
router.get('/:id', function(req, res, next) {
  let companyID = req.params.id;

});


module.exports = router;
