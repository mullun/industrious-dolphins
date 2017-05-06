import React, { Component } from 'react';
import axios from 'axios';
import "./AddTool";
import "./MyTools.css";

class MyTools extends Component {

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

