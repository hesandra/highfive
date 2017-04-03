const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.load();

const router = require('./routes');
const socketController = require('./socketController');

const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(helmet());
app.use('/', router);

/*
 * Setup Http Server w/ express
 */
const server = http.createServer(app).listen(port, () => {
  console.log(`Server running on port: ${port}`);
});


/*
 * Setup Socket.io & pass connection listener to socketHandler
 */
const io = require('socket.io')(server);

socketController.init(io);
module.exports = app;
