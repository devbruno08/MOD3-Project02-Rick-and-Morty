const userServices = require('../Services/user.services');
const bcrypt = require('bcryptjs');

const findAllUserControl = async (req, res) => {
    const allUsers = await userServices.findAllUsersService();
    if(allUsers.length == 0) {
        return res.status(404).send({
            message: 
            'There is not user registered in the database',
        });
    }

    res.send(allUsers);
};

const findUserByIdControl = async (req, res) => {
    const id = req.params.id;
    const oneUser = await userServices.findUserByIdService(id);
    if (oneUser) {
        res.status(200).send(oneUser);
    } else {
        res.status(400).send({ message: 'User with id, is not hear'});
    }
}

const createUserControl = async (req, res) => {
    const user = req.body;
    const encripted = await bcrypt.hash(user.password, 10);
    user.password = encripted;
    const newUser = await userServices.createUserService(user);
    res.status(201).send(newUser);

    

};

module.exports = {
    findAllUserControl,
    createUserControl,
    findUserByIdControl,
};
