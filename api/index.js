const express = require('express')
const app = express();
// const { v4 } = require('uuid');

app.use(express.json());

app.post('/api', (req, res) => {
  console.log(req.body)
  res.json({
    type: "message",
    text: req.body
  })
});

module.exports = app;