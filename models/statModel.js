const moongose = require('mongoose');

const userSchema = new moongose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = moongose.model('User', userSchema);