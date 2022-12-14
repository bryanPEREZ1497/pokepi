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
        // required: true,
        unique: true
    },
    password: {
        type: String,
        // required: true
    },
    role: {
        type: String,
    },
    cedula: {
        type: String,
    },
    names: {
        type: String,
    },
    lastnames: {
        type: String,
    },
    email: {
        type: String,
    },
    isVaccinated: {
        type: Boolean,
    },
    birthdate: {
        type: Date,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    vaccineDate: {
        type: Date,
    },
    doseNumber: {
        type: Number,
    },
    vaccineType: {
        type: String,
    },

    favoritePokemons: [{
        type: moongose.Schema.Types.ObjectId,
        ref: 'Pokemon'
    }]
}, {
    query: {
        byUsername(username) {
            return this.where({ username: new RegExp(username, 'i') })
        },
        byId(id) {
            return this.where({ _id: id })
        },
    },
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject.password;
        delete returnedObject._id;
        delete returnedObject.__v;

    }
});

module.exports = moongose.model('User', userSchema);