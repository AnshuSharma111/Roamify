module.exports = async function suggestMiddleware(req, res, next) {
  try {
    const { chatId, lat, long } = req.body;

    // Placeholder for real suggestion logic
    const suggestions = [
      { place: 'Local Museum', distance: '1.2 km' },
      { place: 'Coffee Spot', distance: '300 m' },
    ];

    req.suggestions = suggestions;
    next();
  } catch (err) {
    console.error('Suggestion middleware error:', err);
    res.status(500).json({ error: 'Failed to generate suggestions' });
  }
};