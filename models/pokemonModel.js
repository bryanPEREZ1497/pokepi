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
        type: moongose.Schema.Types.ObjectId,
        ref: 'Pokemon'
    },
    image: {
        type: String,
        required: true
    },
    stats: [{
        type: Object,
    }]
});

module.exports = moongose.model('Pokemon', pokemonSchema);