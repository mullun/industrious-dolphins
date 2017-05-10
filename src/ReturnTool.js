import React, { Component } from 'react';
import "./ReturnTool.css";
import axios from "axios";

class ReturnTool extends Component {

	constructor(props) {
		super(props);

		this.state= {
			returnableTools: [],
			update: false
		};

		this.componentDidMount = this.componentDidMount.bind(this);
		this.getReturnable = this.getReturnable.bind(this);
		this.returnTool = this.returnTool.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount () {
		
	}

	componentDidUpdate (prevState, prevProps) {

		if(this.state.update){
			this.getReturnable();
			this.setState({ update: false });
		}

	}

	getReturnable () {

	}	

	returnTool (tool) {

		axios.post("returnTool", {id: tool._id})
			.then(function(response){
				console.log(response);
			}).catch(function(err){
				console.log(err);
			})
	
	}

	handleClick (i) {

	}

	render(){
		return(
			<div className="ReturnTool">
				<h2>Return Tool Component</h2>
					<div className="thumbnails">
						{this.state.returnableTools.map(function(search, i){
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
													Return
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

export default ReturnTool;