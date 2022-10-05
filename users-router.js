const {addUser, getUsers, deleteUser, getUser, updateUser} = require('./repository');

const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', async (req, res) => {
    let users = await getUsers(req.query.search);

    res.send(users)
})

router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    const users = await getUsers();
    let user = users.find(u => u.id === userId)
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})

router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await getUser(userId);

    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})

router.post('/', async (req, res) => {
    let name = req.body.name
    let result = await addUser(name)
    res.send({success: true});
})

router.delete('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await deleteUser(userId);
    res.send(204)
})

router.put('/', async (req, res) => {
    let name = req.body.name
    let id = req.body.id
    let result = await updateUser(id, name)
    res.send({success: true});
})

module.exports = router