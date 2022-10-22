const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API Documentation',
            // contact: {
            //     name: 'API Support',
            //     url: 'https://example.com/support',
            //     // email: '
            // },
            // license: {
            //     name: 'Apache 2.0',
            //     url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
            // }
        },
        components: {
            securitySchemes: {
                token: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    in: 'header',
                    name: 'Authorization',

                }
            }
        },

        // servers: [
        //     {
        //         url: 'http://localhost:3000/api/v1'
        //     }
        // ]
    },
    apis: ['./src/routes/v1/*.js', './src/models/*.js']
};

const specs = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(specs));
    app.get('/api/v1/swagger.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(specs);
    });
    console.log(`V1 doc available at http://localhost:${port}/api/v1/docs`);
}

module.exports = swaggerDocs;