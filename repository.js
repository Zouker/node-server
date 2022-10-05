const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String
});
const User = mongoose.model('users', userSchema);

const getUsers = (search) => {
    if (!search) {
        return User.find();
    } else {
        return User.find({name: new RegExp(search)})
    }
}

const getUser = (id) => {
    return User.find({_id: id});
}

const addUser = async (name) => {
    const user = new User({name});
    return user.save();
}

const deleteUser = (id) => {
    return User.deleteOne({_id: id})
}

const updateUser = (id, name) => {
    return User.update({_id: id}, {name: name});
}

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;