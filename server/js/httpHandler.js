/*

this file handles the INCOMING http requests from the client.

in this file, we need to write functions that accept HTTP requests, gather the nesseccery data, and then send it back to the client

*/


const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');



// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};