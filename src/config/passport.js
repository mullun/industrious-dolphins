var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var User = require("../models/User");

// Telling passport we want to use a Local Strategy. In other words, we want to login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email",
    passwordField: "password"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    User.findOne({
      where: {
        email: email
      }
    }).then(function(User) {
      // If there's no user with the given email
      if (!User) {
        return done(null, false, {
          message: "Email not recognized."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!User.validPassword(password)) {
        return done(null, false, {
          message: "Invalid password."
        });
      }
      // If none of the above, return the user
      return done(null, User, {
        message: "I THINK I'M WORKING?"
      });
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;