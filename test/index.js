/* eslint-disable */
'use strict';

const express = require('express');


const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('connected!');
  socket.on('message', function (msg) {
    io.sockets.emit('message', msg)
  })
})
const port = process.env.PORT || 3003;

http.listen(port, function() {
  console.log('Testing on port', port);
});

module.exports = app;
