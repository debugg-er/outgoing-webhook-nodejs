const express = require('express')
const app = express();

app.use(express.json());

app.post('/api', (req, res) => {
  console.log(JSON.stringify(req.body, null, 4))
  res.json({
    type: "message",
    text: JSON.stringify(req.body) 
  })
});

module.exports = app;