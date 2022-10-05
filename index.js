const express = require('express')
const users = require('./users-router')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/users');
}

// создали express app
const app = express()
const port = 7542

// настраиваем его
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/users', users)

app.get('/tasks', async (req, res) => {
    res.send('tasks')
})

// в конец добавляем перехватчик (middleware)
app.use((req, res) => {
    res.send(404);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


process.on('unhandledRejection', function (reason, p) {
    console.log(reason, p)
})