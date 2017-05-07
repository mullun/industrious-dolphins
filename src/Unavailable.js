import React, { Component } from 'react';
//import "./Unavailable.css";
import axios from 'axios';

class Unavailable extends Component {

	constructor(props) {
		super(props);

		this.state= {
			unavailableTools: []
		};

		this.componentDidMount = this.componentDidMount.bind(this);
		this.getUnavailable = this.getUnavailable.bind(this);
	}

	componentDidMount () {
		this.getUnavailable();
	}

	getUnavailable () {
		var unavailable = [];

		axios.get("/getTools", {}).then((response)=>{
			//console.log(response);
			for(var i=0; i<response.data.length; i++){
				if(!response.data[i].toolStatus){
					unavailable.push(response.data[i]);
				}
			}
			console.log("getUnavailable result: " +JSON.stringify(unavailable));
			this.setState({ unavailableTools: unavailable });
			console.log(this.state.unavailableTools);
		});

		
	}	
	render(){
		return(
			<div className="Unavailable">
				<h2>Unavailable Tool Component</h2>
			</div>
			);
	}
}

export default Unavailable;