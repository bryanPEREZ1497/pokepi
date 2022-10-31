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

pokemonService.getUser = async function (pokemonId) {
    try {
        return await PokemonModel.findById(pokemonId)
            .populate('user').select('name user');
    } catch (error) {
        throw error
    }
}

pokemonService.store = async function (pokemon) {
    try {
        return await PokemonModel.create(pokemon);
    } catch (error) {
        throw error
    }
}

module.exports = pokemonService;
