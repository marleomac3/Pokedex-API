const express = require('express'); // imports the express library
const bodyParser = require('body-parser'); // imports the body-parser middleware
const fs = require('fs'); // imports the file system module

// Load the pokemon.json file data
const pokemonData = JSON.parse(fs.readFileSync('pokemon.json', 'utf-8'));

// Create an Express app
const app = express();
app.use(bodyParser.json());