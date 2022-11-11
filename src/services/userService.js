const UserModel = require('../models/userModel');

async function index(search, startedDate, endedDate) {
    try {
        if ((search === '' || search === undefined || search === null)
            && (startedDate?.length === 0 || startedDate === undefined || startedDate === null)
            && (endedDate?.length === 0 || endedDate === undefined || endedDate === null)) {
            console.log('search is emptycc');

            return await UserModel.find();
        }
        if (search === 'Vacunado') {
            console.log('search is Vacunado', search);
            return await UserModel.find({ isVaccinated: true });
        }
        if (search === 'No vacunado') {
            console.log('search is No Vacunado', search);
            return await UserModel.find({ isVaccinated: false });
        }
        if (search === 'Sputnik' || search === 'Pfizer' || search === 'Jhonson&Jhonson' || search === 'AstraZeneca') {
            console.log('search is type', search);
            return await UserModel.find({ vaccineType: search });
        }

        if (startedDate?.length > 0 || endedDate?.length > 0) {
            console.log('search is date');
            console.log('startedDate', startedDate);
            console.log('endedDate', endedDate);
            return await UserModel.find({ vaccineDate: { $gte: startedDate, $lte: endedDate }, });

        }

        // console.log('search is not empty', search);
        console.log('final of block');
        return await UserModel.find();
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
            password: attributes.passwordHashed,
            role: attributes.role,
            cedula: attributes.cedula,
            names: attributes.names,
            lastnames: attributes.lastnames,
            email: attributes.email,
            isVaccinated: attributes.isVaccinated,
            bithdate: attributes.bithdate,
            address: attributes.address,
            phone: attributes.phone,
            vaccineDate: attributes.vaccineDate,
            doseNumber: attributes.doseNumber,
            vaccineType: attributes.vaccineType,
        }).save();
    } catch (error) {
        throw error
    }
}

async function update(id, attributes) {
    try {
        const user = await UserModel.findOne({ _id: id });
        for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                user[key] = attributes[key];
            }
        }
        await user.save();
        return user;
    } catch (error) {
        throw error
    }
}

async function destroy(id) {
    try {
        return await UserModel.findByIdAndDelete(id);
    } catch (error) {
        throw error
    }
}



module.exports = {
    index,
    show,
    store,
    update,
    destroy
};
