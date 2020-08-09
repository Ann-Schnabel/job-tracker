const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: String,
  company: String,
  contact: String,
  appDate: Date,
  appPassed: Boolean,
  initialInfo: Date,
  firstInterview: Date,
  secondInterview: Date,
  thirdInterview: Date,
  fourthInterview: Date,
  status: String,
  notes: String,
  notification: Date,
  contactPlatform: String,
  pros: [String],
  cons: [String],
  salary: Number
})

const Job = mongoose.model('job', jobSchema);

module.exports = Job;
