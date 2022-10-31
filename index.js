const express = require('express');
const app = express();
var cors = require('cors')

const errorHandler = require('./src/middlewares/exceptions/errorHandler');
require('./src/config/databaseConecction');
const api = require('./src/routes/v1/api');
const V1Docs = require('./src/routes/v1/swagger');
const apicache = require("apicache");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const apiVersion = 'v1';

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(`/api/${apiVersion}`, api)

V1Docs(app, process.env.PORT);

app.use('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.use((err, req, res, next) => {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' })
    }
    next(err);
})
app.use(errorHandler);

const server = app.listen(process.env.PORT, () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Server running on port ${process.env.PORT}`);
    }
});

module.exports = { app, server };