const { body, validationResult } = require('express-validator');

function RegisterRequestValidator() {
    return [
        body('username')
            .notEmpty().withMessage('El campo username es requerido'),


        body('password')
            .notEmpty().withMessage('El campo password es requerido')

    ]
}

module.exports = RegisterRequestValidator;