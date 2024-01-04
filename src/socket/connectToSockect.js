const app = require('express')()

app.use(bodyParser.json());
app.use(cors());



const http = require('http').Server(app);
const io = require('socket.io')(http); 

io.on("connection", (socket) => {
    console.log("Client connected");
  
    // Listen for new notification events
    socket.on("newNotification", (notification) => {
      io.emit("newNotification", notification); // Broadcast to all connected clients
      console.log("Notification received:", notification);
    });
  
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
});

module.exports = { app, http, io }