const { body } = require('express-validator');

function registerRequest() {
    return [
        body('username')
            .notEmpty().withMessage('El campo username es requerido'),


        body('password')
            .notEmpty().withMessage('El campo password es requerido')

    ]
}

module.exports = registerRequest;