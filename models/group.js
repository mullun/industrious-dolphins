// Require mongoose
var mongoose = require("mongoose");
// Create schema class
var Schema = mongoose.Schema;

// Create group schema
var GroupSchema = new Schema({
	 
	// Group is requiring string
	group_name: {
		type : String		
	},
	user_id: {
		type: Schema.ObjectId,
		ref: "user"
	}
});

// Create group model with the GroupSchema
var Group = mongoose.model("Group", GroupSchema);

// Export the model
module.exports = Group;
