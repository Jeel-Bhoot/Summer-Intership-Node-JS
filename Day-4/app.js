const express = require('express');
const http = require('http');

const app = express();

const { Server } = require("socket.io");


const server = http.createServer(app);
const io = new Server(server);
app.get('/', (req, res, next)=>{

    res.sendFile(__dirname + '/index.html');
} );

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
  });


  io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
server.listen(3000);