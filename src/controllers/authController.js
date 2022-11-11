const bcrypt = require('bcrypt');

const generateAccessToken = require("../utilities/generateAccessToken");
const UserService = require("../services/userService");
const saltRounds = 10;

async function login(req, res, next) {
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
};

async function logout(req, res) {

    res.json({ message: 'logout', data: '' });

};

async function register(req, res) {
    const passwordHashed = await bcrypt.hash(req.body.password, saltRounds)

    const user = await UserService.store({...req.body, passwordHashed});

    const token = generateAccessToken({ username: user.username });

    res.json({
        message: 'Registrado',
        data: user,
        token
    });
}

module.exports = {
    login,
    logout,
    register
};


