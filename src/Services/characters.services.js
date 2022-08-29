const Character = require('../database/models/character.Schema');
const characterEntity = require('../entities/character.entity');

async function findAllCharacterService() {
    return await Character.find();
};

async function searchCharacterService(name){
    const characterSearch = await Character.findOne({name: name});
    return characterSearch;

};

async function findCharacterByIdService(id) {
    const characterFinded = await Character.findOne({ _id: id });
    return characterFinded;
};

async function createCharacterService(character) {
    const newCharacter = new characterEntity(character);
    newCharacter.validate();
    const characterCreated = new Character({...newCharacter.getCharacter() });
    characterCreated.save();
    return characterCreated;
};

async function updateCharacterService(character, characterID) {
    const updateCharacter = new characterEntity(character);
    const updatedCharacter = {...updateCharacter.getCharacter()
    };

    return await Character.findOneAndUpdate({_id: characterID}, updatedCharacter, {new: true},
    );
};

async function deleteCharacterService(id) {
    const characterFinded = await Character.findOneAndDelete({_id: id});

    return characterFinded;
};

module.exports = {
    findAllCharacterService,
    findCharacterByIdService,
    createCharacterService,
    updateCharacterService,
    deleteCharacterService,
    searchCharacterService,
};
