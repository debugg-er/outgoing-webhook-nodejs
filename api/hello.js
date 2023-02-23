export default function handler(req, res) {
  return res.send(`{ "type": "message", "text": "This is a reply!" }`);
}