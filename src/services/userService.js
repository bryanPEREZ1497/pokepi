const UserModel = require('../models/userModel');

async function index(search) {
    try {
        return await UserModel.find({ name: new RegExp(search, 'i') });
    } catch (error) {
        throw error
    }
};

async function show(attribute, value) {
    try {
        return await UserModel.findOne({ [attribute]: value });
    } catch (error) {
        throw error
    }
}

async function store(attributes) {
    try {
        return await new UserModel({
            username: attributes.username,
            password: attributes.password
        }).save();
    } catch (error) {
        throw error
    }
}

module.exports = {
    index,
    show,
    store
};
