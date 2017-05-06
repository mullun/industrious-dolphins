import React, { Component } from 'react';
import "./AddTool.css";

import axios from 'axios';

class AddTool extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tool_name: "",
			tool_price: "",
			tool_condition: "",
			tool_max_days: "",
			tool_url: ""
		};
	
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleName = this.handleName.bind(this);
		this.handlePrice = this.handlePrice.bind(this);
		this.handleCondition = this.handleCondition.bind(this);
		this.handleMaxDays = this.handleMaxDays.bind(this);
		this.handleUrl = this.handleUrl.bind(this);
		this.addTool = this.addTool.bind(this);	
	}

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
	}

	handleName(event) {
		this.setState({ tool_name: event.target.value });
	}

	handlePrice(event) {
		this.setState({ tool_price: event.target.value });
	}

	handleCondition(event) {
		this.setState({ tool_condition: event.target.value });
	}

	handleMaxDays(event) {
		this.setState({ tool_max_days: event.target.value });
	}

	handleUrl(event) {
		this.setState({ tool_url: event.target.value });
	}

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
	}

	render(){
		
		return(
			<div className="AddTool container">
				<h2>Add A Tool</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label for="toolNameInput">Tool</label>
						<input 
							type="text"
							className="form-control"
							id="toolNameInput"
							onChange={this.handleName}
							placeholder="Tool Name"
							value={this.state.tool_name}
							required
						/>
						<label for="toolPriceInput">Cost To Replace</label>						
						<input 
							type="text"
							className="form-control"
							id="toolPriceInput"
							onChange={this.handlePrice}
							placeholder="$$$"
							value={this.state.tool_price}
							required
						/>	
						<label for="toolConditionInput">Tool Condition</label>						
						<input 
							type="text"
							className="form-control"
							id="toolConditionInput"
							onChange={this.handleCondition}
							placeholder="Lightly used"
							value={this.state.tool_condition}
							required
						/>	
						<label for="toolMaxInput">Max Days To Lend</label>						
						<input 
							type="text"
							className="form-control"
							id="toolMaxInput"
							onChange={this.handleMaxDays}
							placeholder="7 days"
							value={this.state.tool_max_days}
							required
						/>
						<label for="toolUrlInput">Image URL</label>						
						<input 
							type="text"
							className="form-control"
							id="toolUrlInput"
							onChange={this.handleUrl}
							placeholder="$$$"
							value={this.state.tool_url}
							required
						/>	
						<button className="btn">Submit</button>																								
					</div>
				</form>

			</div>	

		);
	}
}

export default AddTool;