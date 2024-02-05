// 5-starwars_characters.js

const request = require('request');

// Check if the user provided the Movie ID
if (process.argv.length !== 3) {
  console.log('Usage: node 5-starwars_characters.js <Movie ID>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

// Make a request to the Star Wars API to get the characters of the specified movie
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Invalid response:', response.statusCode);
    process.exit(1);
  }

  const movieData = JSON.parse(body);
  const charactersUrls = movieData.characters;

  // Fetch character names from their URLs
  charactersUrls.forEach(characterUrl => {
    request(characterUrl, (error, response, body) => {
      if (error) {
        console.error('Error:', error);
        process.exit(1);
      }

      if (response.statusCode !== 200) {
        console.error('Invalid response:', response.statusCode);
        process.exit(1);
      }

      const characterData = JSON.parse(body);
      console.log(characterData.name);
    });
  });
});
