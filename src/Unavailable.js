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

	componentDidUpdate (prevState, prevProps) {
		// this.getUnavailable();
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
			<div className="unavailable container col-md-6">
				<h2>Unavailable Tool Component</h2>
					<div className="thumbnails">
						{this.state.unavailableTools.map(function(search, i){
							return (
								<div className="col-md-4">
									<div className="thumbnail">
										<img src={search.toolUrl} className="img-responsive" />
										<div className="caption">
											<h3>{search.toolName}</h3>
											<p>Owner: {search.toolOwner}</p>
											<p>Condition: {search.toolCondition}</p>
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

export default Unavailable;