class CustomException extends Error {
    constructor(message='Custom', statusCode='300') {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = CustomException;