const character = require('../database/models/character.Schema');
const characterEntity = require('../entities/character.entity');

async function findAllCharacterService() {
    return await character.find();
}

async function findCharacterByIdService(id) {
    const characterFinded = await character.findOne({ _id: id });
    return characterFinded;
}

async function createCharacterService(character) {
    const newCharacter = new characterEntity(character);
    newCharacter.validate();
    const characterCreated = new character({...newCharacter.getCharacter() });
    characterCreated.save();
}

async function updateCharacterService(character) {
    const updateCharacter = new characterEntity(character);
    const updatedCharacter = {...updateCharacter.getCharacter(),
    };

    const characterUpdatedInDatabase = await character.findOneAndUpdate(
        { id: character.id},
        updatedCharacter,
        {new: true },
    );

    return characterUpdatedInDatabase;
}

async function deleteCharacterService(id) {
    const characterFinded = await character.findOneAndDelete({_id: id});

    return characterFinded;
}

module.exports = {
    findAllCharacterService,
    findCharacterByIdService,
    createCharacterService,
    updateCharacterService,
    deleteCharacterService,
};
