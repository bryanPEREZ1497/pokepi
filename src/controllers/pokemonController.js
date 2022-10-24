const PokemonModel = require('../models/pokemonModel');

const pokemonController = {};

pokemonController.index = async function (req, res, next) {
    try {
        res.json({
            message: 'Success',
            data: await PokemonModel.find({ name: new RegExp(req.query.search, 'i') })
        });
    } catch (error) {
        next(error);
    }
};

pokemonController.show = async function (req, res, next) {
    try {
        const pokemon = await PokemonModel
            .findOne({ _id: req.params.id });
        res.status(201).json({
            message: 'Success',
            data: pokemon
        })

    } catch (error) {
        next(error);
    }
}

module.exports = pokemonController;