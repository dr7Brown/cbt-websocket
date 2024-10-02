// Import the WebSocket library
const WebSocket = require("ws");

// Create a new WebSocket server on a specific port (e.g., port 8080)
const wss = new WebSocket.Server({ port: 8080 });

// Handle connection event when a client connects
wss.on("connection", function connection(ws) {
  console.log("A new client connected!");

  // Send a welcome message to the client
  ws.send("Welcome to the WebSocket server!");

  // Listen for incoming messages from the client
  ws.on("message", function incoming(messagee) {
    console.log("Received:", message);

    // Broadcast the message to all connected clients
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(serializedData);
      }
    });
  });

  // Handle close event when a client disconnects
  ws.on("close", function () {
    console.log("A client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
