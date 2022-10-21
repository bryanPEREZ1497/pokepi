const moongose = require('mongoose');

const bookSchema = new moongose.Schema({
    title: {
        type: String,
        required: true
    },
    subscriber: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'Subscriber',
        required: true
    }
});

module.exports = moongose.model('Book', bookSchema);