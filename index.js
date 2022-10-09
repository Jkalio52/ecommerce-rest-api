// set up a basic Express server
const express = require('express');
const app = express();
// const port = 3000;

const loaders = require('./loaders');
const { PORT } = require('./config');
async function startServer() {

  // Init application loaders
  loaders(app);

  // Start server
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  })
}

startServer();
