const users = require('../database/models/user.Schema');

const findAllUsersService = async () => {
    const allUsers = await users.find();
    return allUsers;
};

const createUsers = async (newUser) => {
    const createdUser = await users.create(newUser);
    return createdUser;
}

module.exports = {
    findAllUsersService,
    createUsers,
};
