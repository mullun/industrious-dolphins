import React, { Component } from 'react';
//import "./Available.css";
import axios from 'axios';

import { 
	ListGroup,
	ListGroupItem,
	Modal,
	Button
} from 'react-bootstrap/lib/';


class Available extends Component {

	constructor(props) {
		super(props);

		this.state= {
			availableTools: [],
			toolName: [],
			showModal: false,
			currentToolName: '',
			currentToolOwner: '',
			currentToolDays: '',
			currentToolPrice: '',
			currentToolCondition: ''
		};

		this.componentDidMount = this.componentDidMount.bind(this);
		this.getAvailable = this.getAvailable.bind(this);
		this.currentTool = this.currentTool.bind(this);
	    this.close = this.close.bind(this);	
	}

	componentDidMount () {
		this.getAvailable();
	}

	getAvailable () {
		var available = [];
		var toolName = [];

		axios.get("/getTools", {}).then((response)=>{
			for(var i=0; i<response.data.length; i++){
				if(response.data[i].toolStatus){
					available.push(response.data[i]);
					toolName.push(<ListGroupItem onClick={this.currentTool} value={response.data[i].toolName} className="available" id={i} key={i}>{response.data[i].toolName}</ListGroupItem>);
				}
			}

			console.log("getAvailable result: " +JSON.stringify(available));
			this.setState({ availableTools: available });
			this.setState({ toolName: toolName })
		});	
	}

	currentTool(event) {
    	this.setState({currentToolName: this.state.availableTools[event.target.id].toolName});
    	this.setState({currentToolOwner: this.state.availableTools[event.target.id].toolOwner});
    	this.setState({currentToolDays: this.state.availableTools[event.target.id].toolMaxDays});
    	this.setState({currentToolPrice: this.state.availableTools[event.target.id].toolPrice});
    	this.setState({currentToolCondition: this.state.availableTools[event.target.id].toolCondition});
    	this.setState({showModal: true});
  	}

	close() {
    	this.setState({showModal: false});
  	}
 
	render(){
		return(
			<div className="Available">
				<h2>Available Tools</h2>
				<ListGroup>
					{this.state.toolName}
				</ListGroup>

				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header>
			        	<Modal.Title>{this.state.currentToolName}</Modal.Title>
			      	</Modal.Header>
					<Modal.Body>
						    <h3>Owner: {this.state.currentToolOwner}</h3>
						    <h3>Price: {this.state.currentToolPrice}</h3>
						    <h3>Condition: {this.state.currentToolCondition}</h3>
						    <h3>Max # of Days Rented: {this.state.currentToolDays}</h3>
					</Modal.Body>

					<Modal.Footer>
						<Button bsStyle="primary" onClick={this.close}>Borrow</Button>
						<Button bsStyle="danger" onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default Available;