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
    // this.changeUser = this.changeUser.bind(this);
  }

  handleChange(event) {

  	var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);

  }

  // changeUser(event) {
  //   const user = this.state.user;

  //   this.setState({
  //     user
  //   });
  // }

  handleSubmit(event) {
    console.log('Email: ' + this.state.email + ' and Password: ' + this.state.password);
    event.preventDefault();
  }  

  render() {
    return (
    	<div className="Login">
    	
    		<form onSubmit={this.handleSubmit}>
    			<h4><strong>Email</strong></h4>
                    <input
                      type="text"
                      value={this.state.text}
                      id="email"
                      onChange={this.handleChange}
                      required
                    /><br/>

                <h4><strong>Password</strong></h4>
                    <input
                      type="text"
                      value={this.state.text}
                      id="password"
                      onChange={this.handleChange}
                      required
                    /><br/><br/>

		        <input type="submit" value="Submit" />
    		</form>
    	</div>
    );
  }
}


export default Login;
