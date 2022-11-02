const Router = require('express').Router;
const router = Router();
const fs = require('fs');
const PokemonService = require('../../services/pokemonService');

router.get('', async function (req, res) {
    try {
        PokemonService.deleteAll();
        fs.readFile('pokemons.json', 'utf8', function (err, data) {
            if (err) {
                return res.status(500).send('Error en lectura del archivo');
            }
            const documents = JSON.parse(data);
            documents.forEach(function (document) {
                PokemonService.store(document)
                    .then(res => console.log(res))
                    .catch(e => console.log(e));
            });
            res.send('Data loaded');
        });
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;