const fs = require('fs');
const {readJsonFromFile, writeJsonToFile} = require('./fsUtils');

const getUsers = () => {
    return readJsonFromFile('users.json')
}

const addUser = async (name) => {
    let users = await getUsers();
    users.push({id: users.length + 1, name: name});
    return writeJsonToFile('users.json', users)
}

exports.getUsers = getUsers;
exports.addUser = addUser;