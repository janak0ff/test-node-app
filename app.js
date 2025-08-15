const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // We will change this text to test our pipeline later!
  res.send('Hello janak stha! This is the initial version.');
});

// We export the app to make it available for our unit tests
module.exports = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
