const generateAccessToken = require("../middlewares/generateAccessToken");
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const UserService = require("../services/userService");
const saltRounds = 10;

const authController = {}

authController.login = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ data: errors.array(), message: 'Error en la validación de campos' });
    }
    try {
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
    } catch (error) {
        res.status(401).json({
            message: error.message,
            data: ''
        });
    }
};

authController.logout = async (req, res) => {

    res.json({ message: 'logout', data: '' });

};

authController.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ data: errors.array(), message: 'Error en la validación de campos' });
    }
    try {

        const passwordHashed = await bcrypt.hash(req.body.password, saltRounds)

        const user = await UserService.store({ username: req.body.username, password: passwordHashed });

        const token = generateAccessToken({ username: user.username });

        res.json({
            message: 'Registrado',
            data: user,
            token
        });

    } catch (error) {
        res.status(400).json({
            message: error.message,
            data: ''
        });
    }
}

module.exports = authController;


