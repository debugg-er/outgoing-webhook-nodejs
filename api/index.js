const express = require('express')
const app = express();
// const { v4 } = require('uuid');

app.use(express.json());

app.post('/api', (req, res) => {
  console.log(req.body)
  res.json({
    type: "message",
    text: `[{
		"Column1": "Value1",
		"Column2": "Value2",
		"Column3": "Value3"
	}, {
		"Column1": "Value4",
		"Column2": "Value5",
		"Column3": "Value6"
	}]`

  })
});

module.exports = app;