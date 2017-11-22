'use strict';
const mongoose = require('mongoose');

const record = new mongoose.Schema({
  date: {type: Date, default: () => new Date()},
  city: {type:String, required:true},
  state: {type:String, required:true},
  temperature: {type: String, required:true},
  forecast: {type:String, required: true},
  weatherAlert: {type:String},
});

module.exports = mongoose.model('Record', record);


