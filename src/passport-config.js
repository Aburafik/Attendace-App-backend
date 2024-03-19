const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Employee = require('./models/Employee.js');
const bcrypt = require('bcrypt');

passport.use('local-employee', new LocalStrategy((staffId, password, done) => {
          console.log(email)
          console.log(password)
  Employee.findOne({staffId:staffId}, (err, employee) => {

    if (err) return done(err);
    if (!employee) return done(null, false);
    if (!bcrypt.compareSync(password, employee.password)) return done(null, false);
    return done(null, employee);
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Employee.findById(id, (err, user) => {
    done(err, user);
  });
});
