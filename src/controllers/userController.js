const UserService = require("../services/userService");
const PokemonService = require("../services/pokemonService");
const PokemonModel = require('../models/pokemonModel');
const bcrypt = require('bcrypt');
const userModel = require("../models/userModel");
const saltRounds = 10;

async function getPokemons(req, res) {
    const user = await UserService.show('username', req.user.username);
    const pokemons = await PokemonModel.find({ users: user._id })

    res.json({
        message: 'Success',
        data: pokemons
    });
};

async function addFavoritePokemon(req, res) {
    const user = await UserService.show('username', req.user.username);
    const pokemon = await PokemonService.show('_id', req.params.id);
    user.favoritePokemons.push(pokemon);
    pokemon.users.push(user);
    await user.save();
    await pokemon.save();

    res.json({
        data: pokemon,
        message: 'Success',
    });
};

async function deleteFavoritePokemon(req, res) {
    const user = await UserService.show('username', req.user.username);
    const pokemon = await PokemonService.show('_id', req.params.id);
    pokemon.users.pull(user._id);
    user.favoritePokemons.pull(pokemon._id);
    await user.save();
    await pokemon.save();

    res.json({
        data: pokemon,
        message: 'Success',
    });
}

async function index(req, res) {
    console.log('req.query', req.query);
    const users = await UserService.index(req.query.search, req.query.startedDate, req.query.endedDate);

    res.json({
        message: 'Success',
        data: users
    });
};

async function show(req, res) {
    const user = await UserService.show('_id', req.params.id);

    res.json({
        message: 'Success',
        data: user
    });
};

async function store(req, res) {
    const passwordHashed = await bcrypt.hash(req.body.password, saltRounds)
    const user = await UserService.store({ ...req.body, passwordHashed });

    res.json({
        message: 'Success',
        data: user
    });

};

async function update(req, res) {
    if (req.body.password) {
        const passwordHashed = await bcrypt.hash(req.body.password, saltRounds)
        req.body.password = passwordHashed;
    }
    const user = await UserService.update(req.params.id, req.body);

    res.json({
        message: 'Success',
        data: user
    });
};

async function destroy(req, res) {
    const user = await UserService.destroy(req.params.id);

    res.json({
        message: 'Success',
        data: user
    });
};

async function destroyAll(req, res) {

    // return res.send('destroyAll');
    const users = await userModel.deleteMany({});

    res.json({
        message: 'Success',
        data: users
    });
};



module.exports = {
    getPokemons,
    addFavoritePokemon,
    deleteFavoritePokemon,
    index,
    show,
    store,
    update,
    destroy,
    destroyAll
};


