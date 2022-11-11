const Router = require('express').Router;

const AuthController = require('../../controllers/authController');
const checkUserExist = require('../../middlewares/auth/checkUser');
const loginRequest = require('../../requests/auth/loginRequest');
const registerRequest = require('../../requests/auth/registerRequest');
const tryCatch = require('../../utilities/tryCatch');
const checkErrors = require('../../middlewares/validation/checkErrors');
const authenticateToken = require('../../middlewares/auth/authenticateToken');

const router = Router();

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     requestBody:
 *      content:
 *          application/json:
 *              schema:
 *                  type: object 
 *                  properties:
 *                          username:
 *                              type: string
 *                              example: test
 *                          password:
 *                              type: string
 *                              example: test
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: sdsdfsdfadf
 *                 data:
 *                   type: array 
 *                   example: ''
 *                 message:
 *                   type: string 
 *                   example: Bienvenido
 *                   
 */
router.post('/login',
    loginRequest(),
    checkErrors,
    tryCatch(AuthController.login));

/**
 * @openapi
 * /api/v1/auth/logout:
 *   get:
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get('/logout',
    authenticateToken,
    tryCatch(AuthController.logout));

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     requestBody:
 *      content:
 *          application/json:
 *              schema:
 *                  type: object 
 *                  properties:
 *                          username:
 *                              type: string
 *                              example: test
 *                          password:
 *                              type: string
 *                              example: test
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: sdsdfsdfadf
 *                 data:
 *                   type: array 
 *                   example: ''
 *                 message:
 *                   type: string 
 *                   example: Success
 *                   
 */
router.post('/register',
    // registerRequest(),
    // checkErrors,
    checkUserExist,
    tryCatch(AuthController.register));

module.exports = router;