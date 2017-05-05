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
    // 
    type: Date
  },
  tools_owned: [{
    type: Schema.Types.ObjectId,
    ref: "Tool"
  }], 
  group_id: {
    type: String
    // use Group ID from the Group table
  }
});

// Create user model
var User = mongoose.model("User", UserSchema);
module.exports = User;
