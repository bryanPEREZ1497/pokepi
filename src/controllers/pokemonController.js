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
        const subscriber = await PokemonModel.findOne({ _id: req.params.id });
        // if (subscriber == null) {
        //     return res.status(404).json({ message: 'Cannot find subscriber' });
        // }
        res.status(201).json({
            message: 'Success',
            data: subscriber
        })

    } catch (error) {
        next(error);
    }
}

module.exports = pokemonController;