const {request, response} = require('express')
const User = require('../models/users')
const bcryptjs = require('bcryptjs')

const getUsers = async(req, res) => {
    const {limit=5, skip=0} = req.query;
    const users = await User.find({state: true}).limit(Number(limit)).skip(Number(skip))
    res.json({limit, skip, users})
}

const addUser = async(req, res) => {
    const { username, password, name, email } = req.body;
    const role = "USER";

    //Encriptado
    const user = new User({username, password, name, email, role})
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();
    res.json(user)
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const{ _id, email, ...userBody} = req.body;

    const salt = bcryptjs.genSaltSync();
    userBody.password = bcryptjs.hashSync(userBody.password, salt);
    const user = await User.findByIdAndUpdate(id, userBody);

    res.json(user)
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id)
    res.json(user)
}

module.exports = {getUsers, addUser, updateUser, deleteUser}
