const moongose = require('mongoose');

/**
 * @openapi
 * components:
 *   schemas:
 *     Pokemon:
 *       type: object
 *       properties:
 *         _id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name: 
 *           type: string
 *           example: Tommy V  
 *         description:
 *           type: string
 *           example: For Time
 *         type:
 *           type: array
 *           items:
 *            type: string
 *         height:
 *           type: number
 *           example: 1.8
 *         weight:
 *           type: number
 *           example: 21
 *         evolution: 
 *           type: string
 *           example: some
 *         image:
 *           type: string
 *           example: http://localhost:3000/images/61dbae02-c147-4e28-863c-db7bd402b2d6.jpg
 *         stats:
 *           type: object
 */
const pokemonSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    type: {
        type: [String],
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    evolution: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    stats: Object,
    users: [{
        type: moongose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    query: {
        name(name) {
            return this.where({ name: new RegExp(name, 'i') })
        }
    },
    timestamps: true,
});

module.exports = moongose.model('Pokemon', pokemonSchema);