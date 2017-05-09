import React, { Component } from 'react';
import axios from 'axios';
import "./AddTool";
import "./MyTools.css";

import Login from "./Login";
// // import User from "../models/User.js";

// class MyTools extends Component {
// componentDidMount(){
// 	return axios.get("/mytools")
// 	.then(function(response){
// 		console.log(response);
// 		// console.log(User);
// 		// for (var i=0; i < response.data.length; i++){
// 		// 	if (response.data[i].email === )
// 		// }
// 	})
// }
	
import $ from "jquery";

class MyTools extends Component {
	constructor (props) {
		super(props);

		this.state = {
			thisUsersTools : ''
		}
	}

	componentDidMount() {

		console.log("componentDidMount MyTools");
		var toolsArray = [];
		var tempArticle = $("<Article />");
		console.log("created tempArticle");

		axios.post("/getMyTools", {
			userName : "e201"
    }).then( (response) => {
    	console.log(response);
    	console.log("response.data.length = " + response.data.length);
    	console.log("tool name = " + response.data[0].toolName);
    	for(var i=0; i<response.data.length; i++){
    		$("<h4>" + response.data[i].toolName +"</h4>" ).appendTo(tempArticle);
    	}
    	tempArticle.appendTo("#userToolDiv");
    })
	}



	render(){
		return(
			<div className="MyTools">
					<h2>MyTools Page</h2>
						<div className="UserAddress">
							{this.props.useraddress}
						</div>
						<div id="userToolDiv" className="UsersTools">
							<p>Your tools</p>
						</div>
			</div>
		);
	}
}


export default MyTools;
