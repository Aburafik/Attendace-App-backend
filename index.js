// src/app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
const port = process.env.PORT || 3000;

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
  console.log(error);
});
database.once('connected', () => {
  console.log('Database Connected Successfully');
});

app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration for authentication
passport.use(new LocalStrategy((username, password, done) => {
  // Implement authentication logic here
}));

passport.serializeUser((user, done) => {
  // Serialize user here
});

passport.deserializeUser((id, done) => {
  // Deserialize user here
});

// Routes
app.use('/api/admin', require('./src/routes/admin'));
// app.use('/api/employee', require('./src/routes/employee'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
