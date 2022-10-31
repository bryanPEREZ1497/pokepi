function errorHandler(error, req, res, next) {
    // console.log(err);
    // if (res.headersSent) {
    //     return next(err)
    //   }
    // console.log('1',res.statusCode);
    // console.log('2',res.statusMessage);
    // console.log('3',err.statusCode);
    // console.log('4',err.headers);
    // console.log('5',err.status);
    // console.log('6',err.message);
    // console.log('6',err.stack);
    if (error.name === "ValidationError") {
        return res.status(400).json({
            message: error.message, data: ''
        });
    }
    if (error.name === "ReferenceError") {
        return res.status(500).json({
            message: error.message, data: ''
        });
    }
    res.status(error.statusCode ?? 500).json({ message: error.message, data: '' });
}

module.exports = errorHandler;