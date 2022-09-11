const io = require('socket.io')(3000, {
    cors: {
        origin: "*"
    }
})

io.on('connection', socket => {
    socket.on('new-user', name => {
        console.log(name)
    })
})