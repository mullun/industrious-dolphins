import React, { Component } from 'react';

import {
	NavLink,
} from 'react-router-dom';
// import './Greeting.css';
// import axios from "axios";

class Greeting extends Component {
	
	render() {
		return(

		<div className="container">
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>      
			      </button>
			      <a className="navbar-brand" href="/">Tool Share</a>
			    </div>
			    <div id="navbar" className="navbar-collapse collapse">
			      <ul className="nav navbar-nav">
			      	<li><NavLink activeClassName="activeNav" to="/login">Log In</NavLink></li>
			        <li><NavLink activeClassName="activeNav" to="/submitUser">Sign Up</NavLink></li>
			      </ul>
			    </div>
			  </div>
			</nav>



	      <div className="Mission">
	      	<h1>Welcome to ToolShare!</h1>
	        <h3>An app where people collaborate with tools in their possession.</h3>

	        <h2>Imagine:

	        You have a tiller – your neighbor has a power washer. You would like to get your house power washed – your neighbor would like to till his garden to plant vegetables.<br/><br/>

			Wouldn't it be great to share tools so you don't have to go out and buy an expensive piece of equipment you'll only use once every 5 years?  Think about it: you'd save money and help the environment!<br/><br/>

			This is the purpose of our App – ToolShare!</h2>

		</div>
</div>


		);
	}
}

export default Greeting;

