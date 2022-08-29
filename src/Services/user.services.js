const users = require('../database/models/user.Schema');

const findAllUsersService = async () => {
    const allUsers = await users.find();
    return allUsers;
};

const findUserByIdService = async (id) => {
    const userFinded = await users.findOne({ _id: id });
    return userFinded;
}

const createUserService = async (newUser) => {
    const createdUser = await users.create(newUser);
    return createdUser;
}

module.exports = {
    findAllUsersService,
    createUserService,
    findUserByIdService,
};
