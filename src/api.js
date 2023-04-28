const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  const fs = require('fs');
  fs.readFile('./data/data.json', 'utf-8', (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);
