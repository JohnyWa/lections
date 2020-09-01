const path = require("path");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const port = 5050;
const io = require("socket.io")(http);

const history = [];
const users = {};

app.use(express.static(path.resolve(__dirname, "dist")));

io.on("connection", socket => {
  socket.on("user/joinRooms", name => {
    console.log(`${name} has joined the room`);

    users[socket.id] = name;

    socket.emit("user/joinSuccess", name + " - you joined the room");
    socket.emit("user/connected", history);
    socket.broadcast.emit("room/userJoined", `${name} - joined the room!`)
  });

  socket.on("chat/newMessage", message => {
    const messageInfo = {
      author: users[socket.id],
      userId: socket.id,
      message,
      date: Date.now()
    };

    history.push(messageInfo);
    io.emit("chat/newMessage", messageInfo);
  })

  socket.on("disconnect",
    () => console.log('User has disconnected from server: ' + port ))
});

http.listen(port, () => console.log('The server has been started on the port: ' + port));