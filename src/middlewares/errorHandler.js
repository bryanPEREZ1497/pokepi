
function errorHandler(err, req, res, next) {
    // console.log(err);
    res.json({ message: err.message, data: '' });
    return;
}

module.exports = errorHandler;