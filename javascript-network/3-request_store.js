const request = require('request');
const fs = require('fs');

// Get arguments from the command line
const [, , url, filePath] = process.argv;

// Make a request to the specified URL
request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error('Failed to fetch URL. Status code:', response.statusCode);
        return;
    }

    // Write the response body to the specified file path
    fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log(`Contents of ${url} saved to ${filePath} successfully.`);
    });
});
