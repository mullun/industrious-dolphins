var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create tools schema
var ToolSchema = new Schema ({
	
	tool_name: {
		type: String		
	},
	tool_price: {
		type: Number		
	},
	tool_condition: {
		// working condition - usable, not-usable
		type: String		
	},
	tool_status: {
		type:Boolean
		// rented or available
	},
	tool_renter: {
		// who has it rented currently
		// use UserId from the other table
		type:String
	},
	tool_max_days: {
		// number of days for which it can be rented
		type: Number		
	}, 
	tool_url: {
		// url to a picture of the tool
		type: String		
	}
});
// Create tool model wth the ToolsShema
var Tool = mongoose.model("Tool", ToolSchema);
module.exports = Tool;