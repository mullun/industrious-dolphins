import React, { Component } from 'react';
import axios from 'axios';
import "./AddTool";
import "./MyTools.css";

class MyTools extends Component {

	componentDidMount(){
		return axios.get("/mytools")
		.then(function(response){
			console.log(response);
			
			console.log(userEmail);
		});

	}

	render(){
		return(
		<div className = "container">
			<div className="MyTools">
					<h2>MyTools Page</h2>		
			</div>
			<div className = "UserInfo">
			{this.}
		</div>
			);
	}
}

export default MyTools;

