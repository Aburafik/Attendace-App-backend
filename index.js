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

app.use("/api/admin", router);
app.use("/api/intern", require("./src/routes/internRoute.js"));


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
