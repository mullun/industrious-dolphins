var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");
const saltRounds = 10;

var UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  toolsOwned: [{

    type: Schema.Types.ObjectId,
    ref: "Tool"
  }], 
  groupId: {
    type: String
    // use Group ID from the Group table
  },
  userCreatedDate: {
    type:Date
  }
});

UserSchema.pre("save", function(next) {
  const user = this;

  // runs only if pw is modified or user is new
  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.hash(user.password, salt, function(err, hash) {
    user.password = hash;
    console.log(user.password)
  })
})

// Compare pw with value in db
UserSchema.methods.comparePassword = function(password, cb){}
  bcrypt.compare(password, this.password, function(err, res) {
      if (err) return cb(err)
  });
}

// Create user model
var User = mongoose.model("User", UserSchema);
module.exports = User;
