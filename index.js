require("dotenv").config();
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./src/passport-config.js");
const { http, router,app, io } = require("./src/routes/admin");

const port = process.env.PORT || 3000;

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected Successfully");
});

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
app.use("/api/employee", require("./src/routes/employee"));

http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
