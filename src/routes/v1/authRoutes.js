const Router = require('express').Router;
const router = Router();

const AuthController = require('../../controllers/authController');
const checkUsername = require('../../middlewares/checkUsername');
const LoginRequestValidator = require('../../RequestValidators/Auth/LoginRequestValidator');
const RegisterRequestValidator = require('../../RequestValidators/Auth/RegisterRequestValidator');

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
    LoginRequestValidator(),
    AuthController.login);

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
router.get('/logout', AuthController.logout);

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
    RegisterRequestValidator(),
    checkUsername,
    AuthController.register);

module.exports = router;