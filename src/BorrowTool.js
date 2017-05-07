import React, { Component } from 'react';
import "./BorrowTool.css";
import Available from "./Available";
import Unavailable from "./Unavailable";

class BorrowTool extends Component {
	render(){
		return(
			<div className="BorrowTool">
				<h2>BorrowTool Page</h2>
				<Available />
				<Unavailable />
			</div>
			);
	}
}

export default BorrowTool;