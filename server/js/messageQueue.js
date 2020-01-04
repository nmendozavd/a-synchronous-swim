/*

this file stores all the messages that we write into the terminal command line interface...

currently, it does not work, because we don't call the enqueue/dequeue methods anywhere in the server file

we need to make sure that these methods are called and the array populates with the expected data

i think that these methods are supposed to be called within the keypressHandler file

*/

const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  return messages.shift();
};