const PokemonService = require('../services/pokemonService');
const UserService = require('../services/userService');


async function index(req, res, next) {
    const pokemons = await PokemonService.index(req.query.search);

    res.json({
        message: 'Success',
        data: pokemons
        // data: res.paginatedResults.data,
        // meta: res.paginatedResults.meta
    });
};

async function show(req, res, next) {
    const pokemon = await PokemonService.show('_id', req.params.id);

    res.status(201).json({
        message: 'Success',
        data: pokemon
    })
}

async function store(req, res, next) {
    const pokemon = await PokemonService.store(req.body);

    res.status(201).json({
        message: 'Pokemon created successfully',
        data: pokemon
    });
}

async function getUser(req, res, next) {
    const pokemon = await PokemonService.getUser(req.params.id)

    res.status(201).json({
        message: 'Success',
        data: pokemon
    })
}

module.exports = {
    index,
    show,
    store,
    getUser
};