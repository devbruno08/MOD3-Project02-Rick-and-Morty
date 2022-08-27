const crypto = require('node:crypto');

class characterEntity {
    constructor(character) {
        this.id = character.id ?? crypto.randomUUID();
        this.name = character.name;
        this.image = character.image;
    }

    validate() {
        if(!this.name){
            throw new Error('Character name is required!');
        }
        if(!this.image){
            throw new Error('Character image is required!');
        }
    }

    getCharacter() {
        return {
            id: this.id,
            name: this.name,
            image: this.image,
        };
    };
};

module.exports = characterEntity;
