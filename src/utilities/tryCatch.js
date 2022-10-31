module.exports = function tryCatch(routeHandler) {
    return async function (req, res, next) {
        try {
            await routeHandler(req, res, next);
        } catch (error) {
            return next(error);
        }
    }
}