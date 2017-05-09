  import React, { Component } from 'react';

// import {
// 	NavLink,
// } from 'react-router-dom';
// import './Greeting.css';
import axios from "axios";

import {
  Modal,
  OverlayTrigger,
  Button
} from 'react-bootstrap/lib/';


class Greeting extends Component {
  
	constructor(props) {
    	super(props);

    	this.state = { 
	    	user: {
	      	email: '',
	      	password: ''
	    	},
      		userLogged: '',
      		isLoggedIn: false,
      		showModal: false
      		// ,      buttonPressed: false
    	};

    // this.fade = this.fade.bind(this);
	    this.open = this.open.bind(this);
	    this.close = this.close.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
  		var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
  	}

  	handleSubmit(event) {
  		event.preventDefault();

    	// console.log("login button clicked!")
	  	axios.post("/checkLogin", {
	  		email: this.state.email,
	  		password: this.state.password
	  	}).then(this.setState({isLoggedIn: true}))

	    console.log("children: ");
	    console.log();
	    console.log('Email: ' + this.state.email + ' and Password: ' + this.state.password);
  	}
    
    close() {
    	this.setState({showModal: false});
  	}

  	open() {
    	this.setState({showModal: true});
  	}

	render() {
		return(

		<div className="container">
	    	<div className="Mission">
	      		<h1>Welcome to ToolShare!</h1>
	        	<h3>Need a tool but don't want to buy it? Borrow it from a friend!</h3>

			    <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.open}
          >
              Login now!
          </Button>

          <Modal show={this.state.showModal} onHide={this.close}>
       <Modal.Body>
         <form onSubmit={this.handleSubmit}>
           <h4>
             <strong>Email</strong>
           </h4>
           <input
            type="text"
            value={this.state.text}
            id="email"
            onChange={this.handleChange}
            required
          /><br/>

          <h4>
            <strong>Password</strong>
          </h4>
          <input
            type="password"
            value={this.state.text}
            id="password"
            onChange={this.handleChange}
            required
          /><br/><br/>

          <button onClick={this.handleSubmit}>Login</button>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={this.close}>Close</Button>
      </Modal.Footer>
    </Modal>
		</div>
</div>


		);
	}
}

export default Greeting;

// Navbar

// <nav className="navbar navbar-default">
// 			  <div className="container-fluid">
// 			    <div className="navbar-header">
// 			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
// 			        <span className="sr-only">Toggle navigation</span>
// 			        <span className="icon-bar"></span>
// 			        <span className="icon-bar"></span>
// 			        <span className="icon-bar"></span>      
// 			      </button>
// 			      <a className="navbar-brand" href="/">Tool Share</a>
// 			    </div>
// 			    <div id="navbar" className="navbar-collapse collapse">
// 			      <ul className="nav navbar-nav">
// 			      	<li><NavLink activeClassName="activeNav" to="/login">Log In</NavLink></li>
// 			        <li><NavLink activeClassName="activeNav" to="/submitUser">Sign Up</NavLink></li>
// 			      </ul>
// 			    </div>
// 			  </div>
// 			</nav>

// Old Mission
// <h2>Imagine:

// 	        You have a tiller – your neighbor has a power washer. You would like to get your house power washed – your neighbor would like to till his garden to plant vegetables.<br/><br/>

// 			Wouldn't it be great to share tools so you don't have to go out and buy an expensive piece of equipment you'll only use once every 5 years?  Think about it: you'd save money and help the environment!<br/><br/>

// 			This is the purpose of our App – ToolShare!</h2>