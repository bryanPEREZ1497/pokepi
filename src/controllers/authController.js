const bcrypt = require('bcrypt');

const generateAccessToken = require("../utilities/generateAccessToken");
const UserService = require("../services/userService");
const saltRounds = 10;

async function login(req, res, next) {
    // try {
    const user = await UserService.show('username', req.body.username);
    if (!user) {
        throw new Error('Usuario no existe');
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
        throw new Error('Contraseña incorrecta');
    }
    const token = generateAccessToken({ username: req.body.username });

    res.json({
        message: 'Bienvenido',
        data: user,
        token
    });
    // } catch (error) {
    //     res.status(401).json({
    //         message: error.message,
    //         data: ''
    //     });
    // }
};

async function logout(req, res) {

    res.json({ message: 'logout', data: '' });

};

async function register(req, res) {
    // try {

    const passwordHashed = await bcrypt.hash(req.body.password, saltRounds)

    const user = await UserService.store({ username: req.body.username, password: passwordHashed });

    const token = generateAccessToken({ username: user.username });

    res.json({
        message: 'Registrado',
        data: user,
        token
    });

    // } catch (error) {
    //     res.status(400).json({
    //         message: error.message,
    //         data: ''
    //     });
    // }
}

module.exports = {
    login,
    logout,
    register
};


