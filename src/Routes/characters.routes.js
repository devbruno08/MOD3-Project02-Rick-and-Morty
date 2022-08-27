const route = require('express').Router();
const controllersCharacters = require('../Controllers/characters.controllers');

route.get('/characters', controllersCharacters.findAllCharacterControl);
route.get('/characters/find/:id', controllersCharacters.findCharacterByIdControl);
route.post('/characters/create', controllersCharacters.createCharacterControl);
route.put('/characters/update/:id', controllersCharacters.updateCharacterControl);
route.delete('/characters/delete/:id', controllersCharacters.deleteCharacterControl);

module.exports = route;
