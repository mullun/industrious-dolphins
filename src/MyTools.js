import React, { Component } from 'react';
import axios from 'axios';
import "./AddTool";
import "./MyTools.css";
import Login from "./Login";
// import User from "../models/User.js";

class MyTools extends Component {
componentDidMount(){
	return axios.get("/mytools")
	.then(function(response){
		console.log(response);
		// console.log(User);
		// for (var i=0; i < response.data.length; i++){
		// 	if (response.data[i].email === )
		// }
	})
}
	

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
