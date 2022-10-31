const { validationResult } = require('express-validator');

module.exports = function checkErrors(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // en lugar de usar res se puede lanzar un error, pero para eso necesito crear un AppError
        return res.status(400)
            .json({
                data: errors.array(),
                message: 'Error en la validación de campos'
            });
    }
    next();
}