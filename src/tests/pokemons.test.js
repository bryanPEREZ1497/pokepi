const mongoose = require('mongoose');
const supertest = require('supertest');
const { app, server } = require('../../index');

const api = supertest(app);

test('GET /pokemons', async () => {
    // const response = await api.get('/pokemons');
    // expect(response.status).toBe(200);
    await api.get('/api/v1/pokemons')
        .expect(401)
        .expect('Content-Type', /application\/json/)
});

afterAll(() => {
    mongoose.connection.close();
    server.close();
});