const mongoose = require('mongoose');
const supertest = require('supertest');
const { app, server } = require('../../index');

const api = supertest(app);

test('GET /pokemons', async () => {
    await api.get('/api/v1/pokemons')
        .expect(200)
        .expect('Content-Type', /application\/json/)
});

afterAll(() => {
    mongoose.connection.close();
    server.close();
});