const moongose = require('mongoose');

const subscriberSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    books: [{
        type: moongose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
});

module.exports = moongose.model('Subscriber', subscriberSchema);