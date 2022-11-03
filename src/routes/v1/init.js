const Router = require('express').Router;
const router = Router();
const fs = require('fs');
const PokemonService = require('../../services/pokemonService');

router.get('', async function (req, res, next) {
    try {
        PokemonService.deleteAll();
        fs.readFile('pokemons.json', 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            const documents = JSON.parse(data);
            documents.forEach(function (document) {
                PokemonService.store(document)
                    .then(res => res)
                    .catch(e => console.log(e));
            });
            res.send('Data loaded');
        });
    } catch (error) {
        next(error);
    }
})

module.exports = router;