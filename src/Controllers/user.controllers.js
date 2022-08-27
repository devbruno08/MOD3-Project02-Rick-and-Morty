const userServices = require('../Services/user.services');

const findAllUserControl = async (req, res) => {
    const allUsers = await userServices.findAllUsersService();
    if(allUsers.length == 0) {
        return res.status(404).send({
            message: 
            'There is no user registered in the database',
        });
    }

    res.send(allUsers);
};

const createUserControl = async (req, res) => {
    const user = req.body;
    const newUser = await userServices.createUserService(user);
    res.status(201).send(newUser);

};

module.exports = {
    findAllUserControl,
    createUserControl,
};
