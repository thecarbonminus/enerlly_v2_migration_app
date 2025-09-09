const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Catch-all route that handles any path and method
app.use((req, res) => {
  const response = {
    message:
      "We have migrated to a new version of our website. You can now find us at: https://api.carbonminus.com/",
  };

  response.requestBody = req.body;

  res.status(201).json(response);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {});

module.exports = app;
