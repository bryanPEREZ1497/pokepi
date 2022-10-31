const userService = require("../../services/userService");

async function checkUser(req, res, next) {
    try {
        const user = await userService.show('username', req.body.username);
        if (user) {
            throw new Error('El usuario ya existe');
        }
        next();
    } catch (error) {
        res.status(400).json({
            message: error.message,
            data: ''
        });
    }
};

module.exports = checkUser;