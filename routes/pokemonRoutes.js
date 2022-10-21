const Router = require('express').Router;
const router = Router();
const pokemonController = require('../controllers/pokemonController');
const authenticateToken = require('../middlewares/authenticateToken');

router.use(authenticateToken);

// Getting all
router.get('/', pokemonController.index);

// Getting One
router.get('/:id', pokemonController.show);

module.exports = router;