const { v4: uuidv4 } = require('uuid');

module.exports = function generateChatId() {
  return uuidv4();
};