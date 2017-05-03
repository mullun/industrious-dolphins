var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  confirmPassword: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  addressOne: {
    type: String
  },
  addressTwo: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  },
  date: {
    type: Date
  },
  tool_id: {
    type: Schema.ObjectId,
    ref: "tools"
  }, 
  group_id: {
    type: Schema.ObjectId,
    ref: "tools"
  }
});

// Create user model
var User = mongoose.model("User", UserSchema);
module.exports = User;
