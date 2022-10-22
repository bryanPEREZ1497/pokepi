const Router = require('express').Router;
const router = Router();
const pokemonController = require('../../controllers/pokemonController');
const authenticateToken = require('../../middlewares/authenticateToken');
const pokemonModel = require('../../models/pokemonModel');

router.use(authenticateToken);

// Getting all
router.get('/', pokemonController.index);

// Getting One
router.get('/:id', pokemonController.show);

router.delete('/', (req, res) => {
    pokemonModel.deleteMany({}, (err) => {
        if (err) {
            res.status(500).json({ message: 'Error deleting all pokemon' });
        } else {
            res.status(200).json({ message: 'All pokemon deleted' });
        }
        // res.send('With this endpoint you can delete pokemons');
    });
});
module.exports = router;