const express = require('express')
const fetch = require('node-fetch')
const app = express();

app.use(express.json());

const tagRegex = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g

app.post('/api', async (req, res) => {
  console.log(JSON.stringify(req.body, null, 4))
  const text = req.body.text.replace(/<a>.+?<\/a>\s+/g, '').replace(tagRegex, '').replace(/\n+/g, '')

  const requestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.API_KEY
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: text}]
    })
  };

  try {
    const req = await fetch('https://api.openai.com/v1/chat/completions', requestConfig)
    const data = await req.json()
    console.log(JSON.stringify(data, null, 4))
    res.json({
      type: "message",
      text: data.choices[0].message.content
    })
  } catch (err) {
    console.error(error);
    res.json({
      type: "message",
      text: JSON.stringify(err)
    })
  } 
});

module.exports = app;