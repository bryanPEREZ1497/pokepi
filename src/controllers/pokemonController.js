const { defineAbilityFor } = require('../abilities/defineAbility');
const pokemonModel = require('../models/pokemonModel');
const UserModel = require('../models/userModel');
const PokemonService = require('../services/pokemonService');
const UserService = require('../services/userService');
const { validationResult } = require('express-validator');
const { CustomException } = require('../exceptions/CustomException');

const pokemonController = {};

pokemonController.index = async function (req, res, next) {
    const pokemons = await PokemonService.index(req.query.search);
    
    res.json({
        message: 'Success',
        data: pokemons
        // data: res.paginatedResults.data,
        // meta: res.paginatedResults.meta
    });
};

pokemonController.show = async function (req, res, next) {
    const pokemon = await PokemonService.show('_id', req.params.id);

    res.status(201).json({
        message: 'Success',
        data: pokemon
    })
}

pokemonController.store = async function (req, res, next) {
    const pokemon = await PokemonService.store(req.body);

    res.status(201).json({
        message: 'Pokemon created successfully',
        data: pokemon
    });
}

pokemonController.getUser = async function (req, res, next) {
    const user = await UserService.show('username', req.user.username);
    const pokemon = await PokemonService.getUser(req.params.id)
    const ability = defineAbilityFor(user);

    if (ability.cannot('read', pokemon)) {
        throw new Error('You are not allowed to do this');
    }

    res.status(201).json({
        message: 'Success',
        data: pokemon
    })
}

module.exports = pokemonController;