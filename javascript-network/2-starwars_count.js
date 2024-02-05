// 2-starwars_count.js

// Importing necessary modules
const request = require('request');

// Extracting command line arguments
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const characterId = 18;

// Making a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error('Status:', response.statusCode);
    } else {
        const films = JSON.parse(body).results;
        let count = 0;
        // Loop through each film to check if Wedge Antilles is present
        films.forEach(film => {
            if (film.characters.includes(`${apiUrl}${characterId}/`)) {
                count++;
            }
        });
        console.log(count);
    }
});
