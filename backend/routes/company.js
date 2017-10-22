var express = require('express');
var Company = require('../model/company');
var router = express.Router();

// Returns list of companys
router.get('/', function(req, res, next) {
  Company.find({}, function(err, companies) {
    console.log(companies);
    res.json({"companies": companies});
  });
});

router.get('/search', function(req, res, next) {
  let name = req.query.name;
  let service = req.query.service;

  Company.find({"name": new RegExp(name, 'i'), "service": new RegExp(service, 'i')}, function(err, companies) {
    res.json({"companies": [companies]});
  });
});

// Returns a single company
router.get('/:id', function(req, res, next) {
  let companyID = req.params.id;
  Company.findByID(companyID, function(err, company) {
    console.log(company);
    res.json({"company": company});
  });

});

// Returns all companys of a specific service
router.get('/service/:service', function (req, res, next) {
  let service = req.params.service;

});

router.get('/requests/:service', function(req, res, next) {

});

router.post('/', function(req, res) {
  let company = new Company({ name: req.body.name, service: req.body.service });
  company.save(function(err) {
    if (err) {
      return res.json({"status": "error saving"});
    }
  });

  res.json({"status": "saved"});
});

router.delete('/:id', function(req, res, next) {
  let company
});

module.exports = router;
