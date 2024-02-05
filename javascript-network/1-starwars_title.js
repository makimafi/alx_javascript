// Import necessary modules
const request = require('request');

// Get the movie ID from the command line argument
const movieId = process.argv[2];

// Construct the URL for the Star Wars API
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the API endpoint
request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error occurred:', error);
    } else {
        // Parse the JSON response body
        const movieData = JSON.parse(body);
        
        // Extract the title of the movie from the response
        const movieTitle = movieData.title;
        
        // Print the title of the movie
        console.log(movieTitle);
    }
});
