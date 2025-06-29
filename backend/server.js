const express = require('express');
const bodyParser = require('body-parser');

// Importing routes
const chatRoutes = require('./routers/chatRouter');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// test route
app.get("/", (req, res) => {
    res.send("Roamify is online!");
})

app.use(express.json());
app.use('/chat', chatRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});