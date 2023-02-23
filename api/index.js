const app = require('express')();
// const { v4 } = require('uuid');

app.get('/api', (req, res) => {
  res.end(`{ "type": "message", "text": "This is a reply!" }`);
});
app.post('/api', (req, res) => {
  res.end(`{ "type": "message", "text": "This is a reply!" }`);
});

module.exports = app;