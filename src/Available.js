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
		this.componentDidUpdate = this.componentDidUpdate.bind(this);
		this.getAvailable = this.getAvailable.bind(this);
		this.borrowTool = this.borrowTool.bind(this);
		this.handleClick = this.handleClick.bind(this);
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
			console.log(this.state.availableTools);
		});
	
	}

	componentDidUpdate (prevState, prevProps) {

			// this.getAvailable();

	}

	handleClick (i) {

		var tools = this.state.availableTools;

		var toolToBorrow = tools[i];

		this.borrowTool(toolToBorrow);
		this.getAvailable();		
	}

	borrowTool (tool) {

		axios.post("/borrowTool", {id: tool._id})
			.then(function(response){
				console.log(response);
			}).catch(function(err){
				console.log(err);
			})

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
			<div className="available container col-md-6">
				<h2>Available Tool Component</h2>
				<div className="thumbnails">
					{this.state.availableTools.map(function(search, i){
						return (
								<div className="col-md-4">
									<div className="thumbnail">
										<img src={search.toolUrl} className="img-responsive" />
										<div className="caption">
											<h3>{search.toolName}</h3>
											<p>Owner: {search.toolOwner}</p>
											<p>Condition: {search.toolCondition}</p>
											<button
												className="btn"
												value={i}
												onClick= {() => this.handleClick(i)}
											>
												Borrow
											</button>	
										</div>		
									</div>
								</div>
							)
					}, this)}
				</div>

			</div>
		);
	}
}

export default Available;