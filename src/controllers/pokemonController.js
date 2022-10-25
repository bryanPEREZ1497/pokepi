const PokemonService = require('../services/pokemonService');

const pokemonController = {};

pokemonController.index = async function (req, res, next) {
    try {
        res.json({
            message: 'Success',
            data: await PokemonService.index(req.query.search)
        });
    } catch (error) {
        next(error);
    }
};

pokemonController.show = async function (req, res, next) {
    try {
        res.status(201).json({
            message: 'Success',
            data: await PokemonService.show('_id', req.params.id)
        })

    } catch (error) {
        next(error);
    }
}

module.exports = pokemonController;