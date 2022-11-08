function errorHandler(error, req, res, next) {
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