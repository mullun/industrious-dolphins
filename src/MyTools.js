import React, { Component } from 'react';
import React, { Component } from 'react';
import axios from 'axios';
import "./AddTool";
import "./MyTools.css";
// import "../utils/helpers.js";

class MyTools extends Component {

	// componentDidMount(){
	// 	helpers.getMyToolsUser()
	// 	.then(function(response){
	// 		var userID = response.
	// 	})

	// }

	render(){
		return(
			<div className="MyTools">
					<h2>MyTools Page</h2>
						<div className="UserAddress">
							{this.props.useraddress}
						</div>
						<div className="UsersTools">

						</div>
			</div>
		);
	}
}

export default MyTools;
