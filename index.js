var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.get('/', (req, res) => {
    var url = 'd:/nodefile/chat-app' + '/index.html'
    res.sendFile(url)
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        var bmsg = 'Broadcating msg ' + msg;
        io.emit('broadcast msg', bmsg)
    })
})

http.listen(8000, () => console.log(`App listening on ${8000}`))