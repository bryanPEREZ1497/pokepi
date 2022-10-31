const { body } = require('express-validator');

function loginRequest() {
    return [
        body('username')
            .notEmpty().withMessage('El campo username es requerido'),
            // .isLength({ min: 10 }).withMessage('El campo username debe tener al menos 10 caracteres'),


        body('password')
            .notEmpty().withMessage('El campo password es requerido')
            // .isLength({ min: 10 }).withMessage('El campo password debe tener al menos 10 caracteres'),

    ]
}

module.exports = loginRequest;