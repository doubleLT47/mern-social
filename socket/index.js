const io = require('socket.io')(3300,{
    cors: {
        origins: "https://localhost:3000",
        methods: ["GET", "POST"]
    }
});

let users = [];

const addUser = (userId, socketId) => {
    !users.some(user => user.userId === userId) && users.push({ userId, socketId });
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find(user => user.userId === userId);
}

io.on('connection', (socket) =>{
    //one user connected to server
    console.log("A user connected!")

    //take userId and socketId from user
    socket.on('add-user', userId => {
        addUser(userId, socket.id);
        io.emit("get-users", users)
    })
    //send and get message
    socket.on("send-message", ({senderId, receiverId, text}) => {
        const user = getUser(receiverId);
        io.to(user.socketId).emit('get-message', {
            senderId,
            text
        })
    })

    //one user disconnected from server
    socket.on('disconnect', () =>{
        console.log("User disconnected");
        removeUser(socket.id);
        io.emit("get-users", users)
    })
})
