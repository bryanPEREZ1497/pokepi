const moongose = require('mongoose');

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         username: 
 *           type: test
 *           example: Tommy V  
 *         password:
 *           type: string
 *           example: test
 */
const userSchema = new moongose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = moongose.model('User', userSchema);