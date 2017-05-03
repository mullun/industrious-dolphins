var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create tools schema
var ToolsSchema = new Schema ({
	
	
	
	tool_name: {
		type: String		
	},
	tool_price: {
		type: Number		
	},
	tool_condition: {
		type: String		
	},
	tool_max_days: {
		type: Number		
	}, 
	tool_url: {
		type: String		
	},
	user_id: {
		type: Schema.ObjectId,
		ref: "user"
	}
});
// Create tool model wth the ToolsShema
var Tools = mongoose.model("Tools", ToolsSchema);
module.exports = Tools;