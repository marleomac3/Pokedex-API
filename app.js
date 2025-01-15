const express = require('express'); // imports the express library
const bodyParser = require('body-parser'); // imports the body-parser middleware
const fs = require('fs'); // imports the file system module
const pokemonRoutes = require('./routes/pokemonRoutes'); // imports the pokemonRoutes module

// Load the pokemon.json file data
const pokemonData = JSON.parse(fs.readFileSync('pokemon.json', 'utf-8'));

// Create an Express app
const app = express(); // Creates a new Express app
app.use(bodyParser.json()); // Uses the body-parser middleware to parse JSON data from the request body
app.use('/pokemon', pokemonRoutes(pokemonData)); // Uses the pokemonRoutes module to handle requests to the '/pokemon' endpoint

// Start the server
const PORT = process.env.PORT || 3000; // Sets the port number to use. If the PORT environment variable is set, use that. Otherwise, use 3000
app.listen(PORT, () => { // Starts the server on the specified port
    console.log(`Server listening on port ${PORT}`); // Logs a message to the console
});