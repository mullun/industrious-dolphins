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

// Create user model
var User = mongoose.model("User", UserSchema);
module.exports = User;
