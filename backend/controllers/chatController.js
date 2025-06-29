// travel assistant app. First request to start a chat session includes the user ID and the location of the user.
// We create a chat session with a unique session ID, pass it and the location to the suggestion middleware
// The suggestion middleware generates suggestion based on the location and returns it to the response.

const generateChatId = require('../utils/generateChatId');

exports.startChat = function (req, res, next) {
    try {
        const { lat, long, uid } = req.body;
    
        if (!lat || !long || !uid) {
            return res.status(400).json({ error: 'Missing lat, long, or uid' });
        }
    
        const chatId = generateChatId();
        req.body.chatId = chatId;
    
        next(); // Forward to suggestMiddleware
    }
    catch (error) {
        console.error('Error starting chat:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.sendSuggestions = function (req, res) {
  res.status(200).json({
    chatId: req.body.chatId,
    suggestions: req.suggestions,
  });
};
