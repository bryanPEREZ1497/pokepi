const { body } = require('express-validator');

function storePokemonRequest() {
    return [
        body('name')
            .notEmpty().withMessage('El campo name es requerido'),

        body('image')
            .notEmpty().withMessage('El campo image es requerido')
            .isAlphanumeric().withMessage('El campo name debe ser alfanumérico'),
            
        body('height')
            .notEmpty().withMessage('El campo height es requerido')
            .isDecimal().withMessage('El campo height debe ser numérico'),

        body('weight')
            .notEmpty().withMessage('El campo weight es requerido')
            .isDecimal().withMessage('El campo weight debe ser numérico'),
    ]
}

module.exports = storePokemonRequest;