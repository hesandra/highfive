/* eslint-disable */
"use strict";
const io = require('socket.io-client');
const expect = require('chai').expect;
const app = require('./index');
const ioOptions = {
  transports: ['websocket'],
  forceNew: true,
  reconnection: false
};

describe('', function() {
  let server;
  beforeEach(function(done) {
    server = app.listen(4567, function() {
      console.log('Video Server running on port 4567');
    });
    const connection1 = io('http://localhost:3003', ioOptions);
    const connection2 = io('http://localhost:3003', ioOptions);

    done();
  });

  afterEach(function(done) {
    connection1.disconnect();
    connection2.disconnect();
    server.close();
    done();
  });
});

describe('Sockets', function() {
  it('clients should recieve a message when the mesage', function(done) { 
    connection1.emit('message', 'test');
    connection2.on('message', (msg) => {
      expect(msg).to.equal('test');
      done();
    });
  });
});

