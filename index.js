const express = require('express');
const app = express();
const interceptor = require('./middlewares/interceptor');
const errorHandler = require('./middlewares/ErrorHandler');
var cors = require('cors')
require('dotenv').config();
require('./database/conecction');

const subscribersRouter = require('./routes/subscriberRoutes');
const booksRouter = require('./routes/bookRoutes');
const pokemonRouter = require('./routes/pokemonRoutes');
const authRouter = require('./routes/authRoutes');

// const api = process.env.API_URL;
const api = 'api';
const version = 'v1';

app.use(cors());
app.use(express.json());
app.use(interceptor);

app.use(`/${api}/${version}/auth`, authRouter);
app.use(`/${api}/${version}/subscribers`, subscribersRouter);
app.use(`/${api}/${version}/books`, booksRouter);
app.use(`/${api}/${version}/pokemons`, pokemonRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});

