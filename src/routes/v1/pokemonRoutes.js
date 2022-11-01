const Router = require('express').Router;
const router = Router();
const apicache = require("apicache");

const pokemonController = require('../../controllers/pokemonController');
const authenticateToken = require('../../middlewares/auth/authenticateToken');
const paginate = require('../../middlewares/utilities/paginate');
const checkErrors = require('../../middlewares/validation/checkErrors');
const pokemonModel = require('../../models/pokemonModel');
const storePokemonRequest = require('../../requests/pokemon/storePokemonRequest');
const tryCatch = require('../../utilities/tryCatch');

const cache = apicache.middleware;

// router.use(authenticateToken);

/**
 * @openapi
 * /api/v1/pokemons:
 *   get:
 *     tags:
 *       - Pokemons
 *     parameters:
 *      - in: query 
 *        name: search
 *        required: false
 *        type: string
 *     security:
 *      - token: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Pokemon"
 */
router.get('/',
    cache("2 minutes"),
    // paginate(pokemonModel),
    tryCatch(pokemonController.index));

/**
 * @openapi
 * /api/v1/pokemons/{id}:
 *   get:
 *     tags:
 *       - Pokemons
 *     parameters:
 *      - in: path 
 *        name: id
 *        required: true
 *        type: string
 *     security:
 *      - token: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   $ref: "#/components/schemas/Pokemon"
 *       401:
 *         description: Unauthorized
 *         content:
 *          application/json:
 *            schema:
 *                type: object
 *                properties:
 *                    message:
 *                      type: string
 *                      example: Unauthorized
 * 
 * 
 */
router.get('/:id',
    cache("2 minutes"),
    tryCatch(pokemonController.show));

router.get('/:id/users',
    cache("2 minutes"),
    tryCatch(pokemonController.getUser));

router.post('/',
    storePokemonRequest(),
    checkErrors,
    tryCatch(pokemonController.store));

router.delete('/', (req, res) => {
    pokemonModel.deleteMany({}, (err) => {
        if (err) {
            res.status(500).json({ message: 'Error deleting all pokemon' });
        } else {
            res.status(200).json({ message: 'All pokemon deleted' });
        }
    });
});

module.exports = router;