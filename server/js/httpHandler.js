/* SERVER

this file handles the INCOMING http requests from the client.

in this file, we need to write functions that accept HTTP requests, gather the nesseccery data, and then send it back to the client

*/

const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueue = require('./messageQueue.js')

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

// let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);

  if (req.method === 'GET') {
    // --function to generate random move--
    // function getRandomInt(max) {
    //   return Math.floor(Math.random() * Math.floor(max));
    // }

    // var randomMove = () => {
    //   var moves = ['up', 'right', 'down', 'left'];
    //   return moves[getRandomInt(moves.length)]
    // }

    // -- Send message to GET request --
    // check to make sure array is not empty, if so return message
    if (messageQueue.checkLength() !== 0) {
      res.write(messageQueue.dequeue())
    }
  }
  // TRYING HERE >>>>>>>>>>>>>>>>
  if (req.url === '/background.jpg') {
    var bgjpg = fs.createReadStream('./spec/water-lg.jpg')

    console.log('Is this working?')

    bgjpg.on('open', function () {
      bgjpg.pipe(res);
    })

    bgjpg.on('error', function(err) {
      res.end(err);
    });

  }


  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};