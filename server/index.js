// this file is where we make all the calls to the other functions in the server
const messageQueue = require('./js/messageQueue.js')
const keypressHandler = require('./js/keypressHandler');

// how to put message into messages array: messageQueue.enqueue(message)
keypressHandler.initialize((message) => {
  // pass key press to message enqueue as message
  messageQueue.enqueue(message)
  console.log(`Message received: ${message}`)
});

const httpHandler = require('./js/httpHandler');


const http = require('http');
const server = http.createServer(httpHandler.router);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
