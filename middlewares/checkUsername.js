const UserModel = require("../models/userModel");

async function checkUsername(req, res, next) {
    try {
        const username = await UserModel.findOne({ username: req.body.username });
        if (username) {
            throw new Error('El usuario ya existe');
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = checkUsername;