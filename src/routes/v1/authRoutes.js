const Router = require('express').Router;
const router = Router();

const AuthController = require('../../controllers/authController');
const checkUsername = require('../../middlewares/checkUsername');
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im90aGVyIiwiaWF0IjoxNjY2NDY3MTA3LCJleHAiOjE2NjY0Njg5MDd9.6qpdWbx9sZY0E-kM4Me-fntxiNKA0b51qPKp_KdVoAI
/**
 * @openapi
 * /api/v1/auth/login:
 *  post:
 *   tags:
 *    - Auth
 *   requestBody:
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
 *   responses:
 *      200:
 *          description: OK
 *          content:
 *              application/json:
 *                  schema:
 *                  type: object
 *                  properties:
 *                      token:
 *                           type: string
 *                           example: OK
 *                      data:
 *                           type: string
 *                      message:
 *                          type: string
 *                          example: OK
 */
router.post('/login', AuthController.login);

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
 *  post:
 *   tags:
 *    - Auth
 *   requestBody:
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
 *   responses:
 *      200:
 *          description: OK
 *          content:
 *              application/json:
 *                  schema:
 *                  type: object
 *                  properties:
 *                      token:
 *                           type: string
 *                           example: OK
 *                      data:
 *                           type: string
 *                      message:
 *                          type: string
 *                          example: OK
 */
router.post('/register', checkUsername, AuthController.register);

module.exports = router;