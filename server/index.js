const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(bodyParser.json())
app.use(cors())

const favorites = [
    {
        userName: 'Josh',
        food: 'pasta'
    },
    {
        userName: 'Raúl',
        food: 'Pizza'
    }
]

// index
app.get('/favorites', (req, res) => {
    res.send(favorites)
})

// create
app.post('/favorites', (req, res) => {
    const newFavorite = req.body
    favorites.push(newFavorite)
    res.send(newFavorite)
})

app.listen(8080)