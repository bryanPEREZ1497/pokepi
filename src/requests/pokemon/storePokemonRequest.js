const { body } = require('express-validator');

function storePokemonRequest() {
    return [
        body('name')
            .notEmpty().withMessage('El campo name es requerido'),

        body('evolution')
            .notEmpty().withMessage('El campo evolution es requerido')
            .isString().withMessage('El campo evolution debe ser un string'),

        body('description')
            .notEmpty().withMessage('El campo description es requerido')
            .isString().withMessage('El campo description debe ser un string'),

        body('height')
            .notEmpty().withMessage('El campo height es requerido')
            .isDecimal().withMessage('El campo height debe ser numérico'),

        body('image')
            .notEmpty().withMessage('El campo image es requerido')
            .isAlphanumeric().withMessage('El campo name debe ser alfanumérico'),

        body('type')
            .notEmpty().withMessage('El campo type es requerido')
            .isArray().withMessage('El campo type debe ser array'),

        body('weight')
            .notEmpty().withMessage('El campo weight es requerido')
            .isDecimal().withMessage('El campo weight debe ser numérico'),

    ]
}

module.exports = storePokemonRequest;