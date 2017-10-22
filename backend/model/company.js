let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Company = new Schema({
  name: String,
  service: String
});

module.exports = mongoose.model('Company', Company);