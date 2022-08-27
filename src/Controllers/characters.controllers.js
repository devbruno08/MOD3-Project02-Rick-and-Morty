const charactersService = require('../Services/characters.services');

async function findAllCharacterControl(req, res) {
    try{
        const allCharacters = await charactersService.findAllCharacterService();
        res.status(200).send(allCharacters);
    }catch (err){
        console.log(err);
        res.status(500);
    }
}

async function findCharacterByIdControl(req, res) {
    const id = req.params.id;
    const oneCharacter = await charactersService.findCharacterByIdService(id);
    if (oneCharacter) {
        res.status(200).send(oneCharacter);
    } else {
        res.status(400).send({ message: 'Nothing hear a character with id'});
    }
}

async function createCharacterControl(req, res) {
    try{
        const character = req.body;
        const characterCreated = await charactersService.createCharacterService( character,);
        res.status(201).send(characterCreated);
    }catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
}

async function updateCharacterControl(req, res){
    try{
        const character = req.body;
        const characterUpdated = await charactersService.updateCharacterService(character);
        res.status(200).send(characterUpdated);
    } catch(err) {
        res.status(400).send({ message: err.message });
    }
}

async function deleteCharacterControl(req, res) {
    const id = req.params.id;
    const deletedCharacter = await charactersService.deleteCharacterService(id);
    if (deletedCharacter) {
        res.status(200).send(deletedCharacter);
}else {
    res.status(400)
    .send({ message: 'Nothing character with a id searched'});
    }
}

module.exports = {
    findAllCharacterControl,
    findCharacterByIdControl,
    createCharacterControl,
    updateCharacterControl,
    deleteCharacterControl,
};
