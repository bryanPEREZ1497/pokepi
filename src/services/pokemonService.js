const PokemonModel = require('../models/pokemonModel');

async function index(search) {
    try {
        return await PokemonModel.find({ name: new RegExp(search, 'i') });
    } catch (error) {
        throw error
    }
};

async function show(attribute, value) {
    try {
        return await PokemonModel.findOne({ [attribute]: value });
    } catch (error) {
        throw error
    }
}

async function getUser(pokemonId) {
    try {
        return await PokemonModel.findById(pokemonId)
            .populate('user').select('name user');
    } catch (error) {
        throw error
    }
}

async function store(pokemon) {
    try {
        return await PokemonModel.create(pokemon);
    } catch (error) {
        throw error
    }
}

async function deleteAll() {
    try {
        return await PokemonModel.deleteMany();
    } catch (error) {
        throw error
    }
}

module.exports = {
    index,
    show,
    getUser,
    store,
    deleteAll
};
