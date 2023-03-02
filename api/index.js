const express = require('express')
const fetch = require('node-fetch')
const app = express();

app.use(express.json());

const tagRegex = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g

app.post('/api', (req, res) => {
  console.log(JSON.stringify(req.body, null, 4))
  const text = req.body.text.replace(tagRegex, '').replace(/\n+/g, '')

  const requestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: text}]
    })
  };

  fetch('https://api.openai.com/v1/chat/completions', requestConfig)
    .then(response => response.json())
    .then(data => {
      console.log(JSON.stringify(data, null, 4))
      res.json({
        type: "message",
        text: data.choices[0].message.text.content
      })
    })
    .catch(error => {
      console.error(error);
      res.json({
        type: "message",
        text: "failed"
      })
    });
});

module.exports = app;