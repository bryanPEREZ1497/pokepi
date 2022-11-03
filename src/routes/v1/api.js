const router = require('express').Router();

router.use('/auth', require('./authRoutes'));
router.use('/pokemons', require('./pokemonRoutes'));
router.use('/users', require('./userRoutes'));
router.use('/init', require('./init'));

module.exports = router;
