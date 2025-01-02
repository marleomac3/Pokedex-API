const express = require('express');
const router = express.Router();

//GET ROUTES
// Get all Pokémon
router.get('/', (req, res) => { // Defines a route handler for GET requests to the '/pokemon' endpoint
    res.json(pokemonData); // Sends the pokemonData array as a JSON response
});

// Get a specific Pokémon by ID
router.get('/:id', (req, res) => { // Defines a route handler for GET requests to the '/pokemon/:id' endpoint
    const id = parseInt(req.params.id, 10); // Parses the id parameter as an integer
    const pokemon = pokemonData.find(p => p.id === id); // Finds the Pokémon with the specified id
    if (pokemon) { // If a Pokémon is found, send it as a JSON response. Otherwise, send a 404 error and the 'pokemon' constant will remain undefined
        res.json(pokemon);
    } else {
        res.status(404).send('Pokémon not found');
    }
});

// Get Pokémon by type
router.get('/type/:type', (req, res) => { // Defines a route handler for GET requests to the '/pokemon/type/:type' endpoint
    const type = req.params.type.toLowerCase(); // Gets the type parameter from the request
    const filteredPokemon = pokemonData.filter(p => p.type.some(t => t.toLowerCase() === type)); // Filters the pokemonData array to only include Pokémon with the specified type
    res.json(filteredPokemon); // Sends the filtered Pokémon as a JSON response
});

// Export the router
module.exports = router;