// Create web server
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from Express.js!");
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
// Create WebSocket server
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(`Received message => ${message}`);
  });
  ws.send("Hello from WebSocket server!");
});
console.log("WebSocket server is running on ws://localhost:8080");
// Create a comment
const comment = {
  id: 1,
  text: "This is a comment",