var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.get('/', (req, res) => {
    var url = 'd:/nodefile/chat-app' + '/index.html'
    res.sendFile(url)
})

io.on('connection', (socket) => {
    console.log(`a is connected`)
    socket.on('chat message', (msg) => console.log(`${msg}`))
})

http.listen(8000, () => console.log(`App listening on ${8000}`))