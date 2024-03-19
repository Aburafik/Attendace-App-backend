const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('./models/admin');
const bcrypt = require('bcrypt');

passport.use('local-Admin', new LocalStrategy((email, done) => {
          console.log(email)
          console.log(password)
  Admin.findOne({email}, (err, Admin) => {

    if (err) return done(err);
    if (!Admin) return done(null, false);
    if (!bcrypt.compareSync(password, Admin.password)) return done(null, false);
    return done(null, Admin);
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Admin.findById(id, (err, user) => {
    done(err, user);
  });
});
