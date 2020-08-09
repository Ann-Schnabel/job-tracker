const Job = require("./models/jobSchema");

module.exports = function(app) {
  app.get('/api/jobs', (req, res, next) => {
    // get all maintenance reports
    Job.find({}).sort({status: 'desc'}).exec((err, allJobs) => {
      if (err) {
        res.send(err)
      }
      res.send(allJobs)
    });
  });

};