const moongose = require('mongoose');

const pokemonSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    evolution: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    stats: Object,
});

module.exports = moongose.model('Pokemon', pokemonSchema);