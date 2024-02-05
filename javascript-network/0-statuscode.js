// Importing required module
const request = require('request');

// Fetching command line arguments
const url = process.argv[2];

// Making a GET request
request.get(url, function(error, response, body) {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("code:", response.statusCode);
    }
});
