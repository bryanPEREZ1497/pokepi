const router = require('express').Router();

router.use('/auth', require('./authRoutes'));
router.use('/pokemons', require('./pokemonRoutes'));

module.exports = router;
