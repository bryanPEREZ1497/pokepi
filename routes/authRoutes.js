const Router = require('express').Router;
const router = Router();

const AuthController = require('../controllers/authController');
const checkUsername = require('../middlewares/checkUsername');


router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.post('/register', checkUsername, AuthController.register);

module.exports = router;