const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const {
  userJoin,
  getCurrentUser,
  getRoom,
  removeUser

} = require('./utils/users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('working...');

  socket.on('joinroom', ({username, room}, callback) =>{
    //add user to list of users in function userJoin
    const {error, user} = userJoin({id: socket.id, username, room});

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'bot', text: `Welcome to ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', {user: 'bot', text:`${user.username} has joined!`});

    io.to(user.room).emit('getRoom', {room: user.room, users: getRoom(user.room)});

    callback();
  });


  socket.on('sendMessage', (messages, callback) => {
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit('message', {user: user.username, text: messages});
    callback();
  });

  socket.on('leave', ({username, room}) => {
    let user = {id: socket.id, username, room};
    socket.broadcast.to(user.room).emit('message', { user: 'bot', text: `${user.username} has left.` });
    removeUser(user);
    socket.leave(user.room);
    io.to(user.room).emit('getRoom', {room: user.room, users: getRoom(user.room)});
  });
  socket.on('disconnect', (user) => {
    removeUser(user.id)
    io.to(user.room).emit('getRoom', {room: user.room, users: getRoom(user.room)});
  });
});

app.use(router);
app.use(cors());

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
