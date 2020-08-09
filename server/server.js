const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const keys = require('./config/keys');
const moment = require("moment");

// Schemas
const Job = require("./models/jobSchema");


// DB Setup
mongoose.connect(keys.MONGODB_URI);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

// Server Setup
const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);

// Create Data

let salesforceIndustries = new Job({
    title: 'Associate Technical Consultant',
    company: 'Salesforce Industries',
    contact: 'Amber Hara',
    appDate: new Date(2020, 6, 16),
    appPassed: true,
    initialInfo: '',
    firstInterview: new Date(2020, 7, 3),
    secondInterview: new Date(2020, 7, 4),
    thirdInterview: new Date(2020, 7, 11),
    fourthInterview: '',
    status: 'Active',
    notes: '',
    notification: new Date(2020, 7, 12),
    contactPlatform: 'Email',
    pros: ['Great mentorship', 'Good salary', 'Great benefits'],
    cons: ['Only 30% coding'],
    salary: 0
})

let AIMSCO = new Job({
    title: '??',
    company: 'AIMSCO',
    contact: 'Ben Simmons',
    appDate: new Date(2020, 7, 3),
    appPassed: true,
    initialInfo: '',
    firstInterview: new Date(2020, 7, 4),
    secondInterview: '',
    thirdInterview: '',
    fourthInterview: '',
    status: 'Active',
    notes: 'Check in about date of second interview',
    notification: new Date(2020, 7, 10),
    contactPlatform: 'LinkedIn',
    pros: ['Great mentorship', 'Mostly Coding'],
    cons: ['Unsure when needed'],
    salary: 0
})

let morton = new Job({
    title: 'Node.js Developer',
    company: 'Morton',
    contact: 'Brandon Cooper',
    appDate: new Date(2020, 6, 24),
    appPassed: false,
    initialInfo: '',
    firstInterview: '',
    secondInterview: '',
    thirdInterview: '',
    fourthInterview: '',
    status: 'Rejected',
    notes: 'More experience',
    notification: '',
    contactPlatform: 'Email',
    pros: [],
    cons: [],
    salary: 0
})

// salesforceIndustries.save()
// AIMSCO.save()
// morton.save()

