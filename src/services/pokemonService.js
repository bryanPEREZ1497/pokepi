const PokemonModel = require('../models/pokemonModel');

const pokemonService = {};

pokemonService.index = async function (search) {
    try {
        return await PokemonModel.find({ name: new RegExp(search, 'i') });
    } catch (error) {
        throw error
    }
};

pokemonService.show = async function (attribute, value) {
    try {
        return await PokemonModel.findOne({ [attribute]: value });
    } catch (error) {
        throw error
    }
}

module.exports = pokemonService;
