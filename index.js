const express = require('express');
const app = express();
const interceptor = require('./src/middlewares/interceptor');
const errorHandler = require('./src/middlewares/errorHandler');
var cors = require('cors')
require('dotenv').config();
require('./src/database/conecction');

const pokemonRouter = require('./src/routes/v1/pokemonRoutes');
const authRouter = require('./src/routes/v1/authRoutes');

const V1Docs = require('./src/routes/v1/swagger');

// const api = process.env.API_URL;
const api = 'api';
const version = 'v1';

app.use(cors());
app.use(express.json());
app.use(interceptor);

app.use(`/${api}/${version}/auth`, authRouter);
app.use(`/${api}/${version}/pokemons`, pokemonRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
    V1Docs(app, process.env.PORT);
});

