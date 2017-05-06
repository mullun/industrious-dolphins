import React, { Component } from 'react';
//import "./Available.css";
import axios from 'axios';

class Available extends Component {

	constructor(props) {
		super(props);

		this.state= {
			availableTools: []
		};

		this.componentDidMount = this.componentDidMount.bind(this);
		this.getAvailable = this.getAvailable.bind(this);
	}

	componentDidMount () {
		this.getAvailable();
	}

	getAvailable () {
		var available = [];

		axios.get("/getTools", {}).then((response)=>{
			//console.log(response);
			for(var i=0; i<response.data.length; i++){
				if(response.data[i].toolStatus){
					available.push(response.data[i]);
				}
			}
			console.log("getAvailable result: " +JSON.stringify(available));
			this.setState({ availableTools: available });
			console.log(this.state.availableTools);
		});

		
	}
 
	render(){
		return(
			<div className="Available">
				<h2>Available Tool Component</h2>
			</div>
			);
	}
}

export default Available;