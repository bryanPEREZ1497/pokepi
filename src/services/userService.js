const UserModel = require('../models/userModel');

const userService = {};

userService.index = async function (search) {
    try {
        return await UserModel.find({ name: new RegExp(search, 'i') });
    } catch (error) {
        throw error
    }
};

userService.show = async function (attribute, value) {
    try {
        return await UserModel.findOne({ [attribute]: value });
    } catch (error) {
        throw error
    }
}

userService.store = async function (attributes) {
    try {
        return await new UserModel({
            username: attributes.username,
            password: attributes.password
        }).save();
    } catch (error) {
        throw error
    }
}

module.exports = userService;
