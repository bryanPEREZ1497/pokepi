const Router = require('express').Router;
const router = Router();
const apicache = require("apicache");

const userController = require('../../controllers/userController');
const authenticateToken = require('../../middlewares/auth/authenticateToken');
const paginate = require('../../middlewares/utilities/paginate');
const checkErrors = require('../../middlewares/validation/checkErrors');
const tryCatch = require('../../utilities/tryCatch');

const cache = apicache.middleware;

// router.use(authenticateToken);

router.get('/',
    tryCatch(userController.index));

router.get('/:id',
    tryCatch(userController.show));

router.post('/',
    tryCatch(userController.store));

router.put('/:id',
    tryCatch(userController.update));

router.delete('/deleteAll',
    tryCatch(userController.destroyAll));
router.delete('/:id',
    tryCatch(userController.destroy));





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
router.get('/pokemons/favorites',
    tryCatch(userController.getPokemons));

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
router.patch('/pokemons/favorites/:id',
    tryCatch(userController.addFavoritePokemon));

router.delete('/pokemons/favorites/:id',
    tryCatch(userController.deleteFavoritePokemon));

module.exports = router;