const express = require('express');
const app = express();
var cors = require('cors')

const errorHandler = require('./src/middlewares/errorHandler');
require('./src/database/conecction');
const pokemonRouter = require('./src/routes/v1/pokemonRoutes');
const authRouter = require('./src/routes/v1/authRoutes');
const V1Docs = require('./src/routes/v1/swagger');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const api = 'api';
const version = 'v1';

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.use(`/${api}/${version}/auth`, authRouter);
app.use(`/${api}/${version}/pokemons`, pokemonRouter);

V1Docs(app, process.env.PORT);

app.use('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});

