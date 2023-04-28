const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const data = {
  name: 'Andika',
  pekerjaan: 'android developer',
  kesukaan: 'anak kecil'
};

router.get('/', (req, res) => {
  res.json(data);
});

app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);
