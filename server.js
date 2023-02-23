var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write(`{ "type": "message", "text": "This is a reply!" }`); //write a response to the client
  res.end(); //end the response
}).listen(3000, () => {
console.log("server is listening")
}); //the server object listens on port 8080