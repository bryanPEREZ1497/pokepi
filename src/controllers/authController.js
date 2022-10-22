const generateAccessToken = require("../middlewares/generateAccessToken");
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const authController = {}

authController.login = async (req, res, next) => {
    try {
        const user = await UserModel.findOne({ username: req.body.username });
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
        // next(error);
        res.status(401).json({
            message: error.message,
            data: ''
        });
    }
};

authController.logout = async (req, res) => {

    res.json({ message: 'logout' });

};

authController.register = async (req, res) => {
    try {

        const passwordHashed = await bcrypt.hash(req.body.password, saltRounds)

        const user = await new UserModel({
            username: req.body.username,
            password: passwordHashed
        }).save();

        const token = generateAccessToken({ username: req.body.username });

        res.json({
            message: 'register',
            data: user,
            token
        });

    } catch (error) {

    }
}

module.exports = authController;


