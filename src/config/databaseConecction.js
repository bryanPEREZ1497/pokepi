const moongose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

moongose.connect(process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true });

const db = moongose.connection;

db.on('error', (error) => console.error(error));

db.once('open', () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Connected to Database')
    }

});

module.exports = db;