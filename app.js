const express = require('express'); // imports the express library
const bodyParser = require('body-parser'); // imports the body-parser middleware
const fs = require('fs'); // imports the file system module

// Load the pokemon.json file data
const pokemonData = JSON.parse(fs.readFileSync('pokemon.json', 'utf-8'));

// Create an Express app
const app = express();
app.use(bodyParser.json());

// Start the server
const PORT = process.env.PORT || 3000; // Sets the port number to use. If the PORT environment variable is set, use that. Otherwise, use 3000
app.listen(PORT, () => { // Starts the server on the specified port
    console.log(`Server listening on port ${PORT}`); // Logs a message to the console
});