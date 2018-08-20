const express = require('express');
const request = require('request');
const router = express.Router();



const viewConfig = {
    title: "Async Await with Ajax, Promises and Callbacks"
};

const nasaApiKey = process.env.NASA_API_KEY;

const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`;
const apodDateParameter = `date=`;

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('ajax', viewConfig);
    console.log('Just testing...');
});

// the longRunningRequest, despite being called first, will resolve last in the console
router.get('/callback', function (req, res, next) {
    console.log('testing callbacks...');
    //longRunningRequest();
    //shortRunningRequest();
    //getApod();
});

// An example of a request that will take a long time to complete
function longRunningRequest() {
    setTimeout(function () {
        console.log('I\'ve started a long running callback...')
    }, 5000);
}

// An example of a request that will take a shorter time to complete
function shortRunningRequest() {
    setTimeout(function () {
        console.log('I\'ve started a short running callback...')
    }, 2000);
}

// Gets a piece of sample data from NASA's open API, Astronomical P
function getApod() {
    request.get(apodUrl, {}, function(error, response, body) {
        if (error) {
            console.error('Error encountered:', error);
        }
        console.log('body:', body);

    })
}

module.exports = router;