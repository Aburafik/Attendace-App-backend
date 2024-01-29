require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const morgan = require('morgan')
require("./src/passport-config.js");
// const httpProxy = require('http-proxy');
const cors = require('cors')
const { router } = require("./src/routes/adminRoute");
const {app, server, io}= require('./src/controllers/adminController.js');
const { connectToDb } = require('./src/dataBase/connectToDb.js')
// const app = require('express')()

const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'))

connectToDb()

// const server = require('server').Server(app);
// const io = require('socket.io')(server); 

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


app.use(bodyParser.json());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
// app.use(corse);
// Routes
app.use("/api/admin", router);
app.use("/api/employee", require("./src/routes/employeeRoute.js"));

// const proxy = httpProxy.createProxyServer({
//   target: 'https://calm-puce-monkey-shoe.cyclic.app', // Target your Node.js server
//   ws: true, // Enable WebSocket support
// });

// // Start the reverse proxy
// proxy.listen(8, () => {
//   console.log('Proxy server listening on port 80');
// });



server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
