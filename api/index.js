const express = require('express')
const app = express();
const tableify = require('tableify');

const jsonStr = '[{"Name":"Alice","Age":30,"Address":"123 Main St"},{"Name":"Bob","Age":25,"Address":"456 Elm St"}]';
const people = JSON.parse(jsonStr);

const tableHtml = tableify(people, {
  headers: {
    Name: 'Name',
    Age: 'Age',
    Address: 'Address'
  },
  class: 'my-table'
});

console.log(tableHtml);

app.use(express.json());

app.post('/api', (req, res) => {
  console.log(req.body)
  res.json({
    type: "message",
    text: tableHtml 
  })
});

module.exports = app;