import React, { Component } from 'react';
import "./AddTool.css";

import axios from 'axios';

class AddTool extends Component {

	constructor(props) {
		super(props);
		this.setState = {
			tool_name: "",
			tool_price: "",
			tool_condition: "",
			tool_max_days: "",
			tool_url: ""
		};
	},

	handleSubmit(event) {
		event.preventDefault;
		//call addTool function
		this.addTool(this.tool_name, this.tool_price, this.tool_condition, this.tool_max_days, this.tool_url);
		//Reset the state of the component
		this.setState = {
			tool_name: "",
			tool_price: "",
			tool_condition: "",
			tool_max_days: "",
			tool_url: ""
		};		
	},

	handleName() {
		this.setState({ tool_name: event.target.value });
	},

	handlePrice() {
		this.setState({ tool_price: event.target.value });
	},

	handleCondition() {
		this.setState({ tool_condition: event.target.value });
	},

	handleMaxDays() {
		this.setState({ tool_max_days: event.target.value });
	},

	handleUrl() {
		this.setState({ tool_url: event.target.value });
	},

	addTool(name, price, condition, max, url) {
		axios.post("/submitTool", {
			tool_name: name,
			tool_price: price,
			tool_condition: condition,
			tool_max_days: max,
			tool_url: url
		})
		.then(function(response){
			console.log(response);
		})
		.catch(function(err){
			console.log(err);
		})
	},

	render(){
		return(
			<div className="AddTool container">
				<h2>Add A Tool</h2>
				<form>

				</form>

			</div>	

		);
	}
}

export default AddTool;