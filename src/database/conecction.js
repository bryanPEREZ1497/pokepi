const moongose = require('mongoose');
require('dotenv').config();

moongose.connect(process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true });

const db = moongose.connection;

db.on('error', (error) => console.error(error));

db.once('open', () => console.log('Connected to Database'));

module.exports = db;