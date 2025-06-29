const express = require('express');
const router = express.Router();

const chatController = require('../controllers/chatController');
const suggestMiddleware = require('../middleware/suggestMiddleware');

router.post(
  '/start',
  chatController.startChat,
  suggestMiddleware,
  chatController.sendSuggestions
);

module.exports = router;