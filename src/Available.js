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