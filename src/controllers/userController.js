const UserService = require("../services/userService");
const PokemonService = require("../services/pokemonService");
const PokemonModel = require('../models/pokemonModel');

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

module.exports = {
    getPokemons,
    addFavoritePokemon,
    deleteFavoritePokemon
};


