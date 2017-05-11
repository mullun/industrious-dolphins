import React, { Component } from 'react';
import "./BorrowTool.css";
import Available from "./Available";


class BorrowTool extends Component {
	render(){
		return(
			<div className="BorrowTool container">
				<h2>BorrowTool Page</h2>
				<Available />
			</div>
			);
	}
}

export default BorrowTool;