
function interceptor(req, res, next) {
    console.log('Middleware');
    next();
}

module.exports = interceptor;