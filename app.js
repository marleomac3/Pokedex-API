const express = require('express'); // imports the express library
const bodyParser = require('body-parser'); // imports the body-parser middleware
const fs = require('fs'); // imports the file system module

// Load the pokemon.json file data
const pokemonData = JSON.parse(fs.readFileSync('pokemon.json', 'utf-8'));

// Create an Express app
const app = express();
app.use(bodyParser.json());

// Get all Pokémon
app.get('/pokemon', (req, res) => { // Defines a route handler for GET requests to the '/pokemon' endpoint
    res.json(pokemonData); // Sends the pokemonData array as a JSON response
});

// Get a specific Pokémon by ID
app.get('/pokemon/:id', (req, res) => { // Defines a route handler for GET requests to the '/pokemon/:id' endpoint
    const id = parseInt(req.params.id, 10); // Parses the id parameter as an integer
    const pokemon = pokemonData.find(p => p.id === id); // Finds the Pokémon with the specified id
    if (pokemon) { // If a Pokémon is found, send it as a JSON response. Otherwise, send a 404 error and the 'pokemon' constant will remain undefined
        res.json(pokemon);
    } else {
        res.status(404).send('Pokémon not found');
    }
});

// Get Pokémon by type
app.get('/pokemon/type/:type', (req, res) => { // Defines a route handler for GET requests to the '/pokemon/type/:type' endpoint
    const type = req.params.type.toLowerCase(); // Gets the type parameter from the request
    const filteredPokemon = pokemonData.filter(p => p.type.some(t => t.toLowerCase() === type)); // Filters the pokemonData array to only include Pokémon with the specified type
    res.json(filteredPokemon); // Sends the filtered Pokémon as a JSON response
});

// Start the server
const PORT = process.env.PORT || 3000; // Sets the port number to use. If the PORT environment variable is set, use that. Otherwise, use 3000
app.listen(PORT, () => { // Starts the server on the specified port
    console.log(`Server listening on port ${PORT}`); // Logs a message to the console
});