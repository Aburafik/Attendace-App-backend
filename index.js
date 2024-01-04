require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./src/passport-config.js");
const { http, router} = require("./src/routes/admin");
const { app, http, io } = require('./src/socket/connectToSocket.js')
const { connectToDb } = require("./src/dataBase/db.js");

const port = process.env.PORT || 3000;

connectToDb()

io()

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
