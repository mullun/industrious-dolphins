import React, { Component } from 'react';
// import './Login.css';
import axios from "axios";


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      user: {
      	email: '',
      	password: ''
      }
    };

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

    console.log("login button clicked!")
  	axios.post("/checkLogin", {
  		email: this.state.email,
  		password: this.state.password
  	}).then()
  	
    console.log('Email: ' + this.state.email + ' and Password: ' + this.state.password);
  }  

  render() {
    return (
    	<div className="Login">
    	
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

		        <button type="submit">Login</button>
    		</form>
    	</div>
    );
  }
}

export default Login;
