import React, { Component } from 'react';

// import {
// 	NavLink,
// } from 'react-router-dom';
// import './Greeting.css';
import axios from "axios";

import {
  Modal,
  OverlayTrigger,
  Button,
  Tabs,
  Tab,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap/lib/';

import $ from "jquery";


class Greeting extends Component {
  
	constructor(props) {
    	super(props);

    	this.state = {
        // Login states 
	    	user: {
	      	email: '',
	      	password: ''
	    	},
        userLogged: '',
      	isLoggedIn: false,
      	showModal: false,

        // Sign up states
        emailRecd: '', 
        passwordRecd: '',
        confirmPasswordRecd: '',
        firstNameRecd: '',
        lastNameRecd: '',
        groupNameRecd: '',
        arrayOfGroups: []
    	};

      // Signup binds
      this.submitUserDetails = this.submitUserDetails.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);  
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleGroupNameChange = this.handleGroupNameChange.bind(this);

      // Login binds
	    this.open = this.open.bind(this);
	    this.close = this.close.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

    // Signup functions
    componentDidMount(){
    
  }


  handleEmailChange(e) {
    this.setState({ emailRecd: e.target.value });
    console.log("email entered");
  }
  handlePasswordChange(e) {
    this.setState({ passwordRecd: e.target.value });
    console.log("password entered");
  }
  handleConfirmPasswordChange(e) {
    this.setState({ confirmPasswordRecd: e.target.value });
    console.log("confirm password entered");
  }
  handleFirstNameChange(e) {
    this.setState({ firstNameRecd: e.target.value });
    console.log("first Name entered");
  }
  handleLastNameChange(e) {
    this.setState({ lastNameRecd: e.target.value });
    console.log("last Name entered");
  }
  handleGroupNameChange(e) {
    this.setState({ groupNameRecd: e.target.value });
    console.log(" Group Name entered");
  }

  submitUserDetails() {

    console.log("Submit button clicked to sign up");
    // assume user selected an existing group
    var newGroup = false; // false to true (TEMPORARY)
    var groupNameSelected = $("#dropDown :selected").text();
    // var groupNameSelected = "Test Group 777";
    // check to see if user selected an existing group
    var groupNameValue = $("#dropDown :selected").val();
    if ( ( $("#dropDown :selected").val() ) < 0 ) {
      newGroup = true;
      groupNameSelected = this.state.groupNameRecd;
    }
    console.log("group name selected: ");
    console.log(groupNameSelected);

    console.log("email = " + this.state.emailRecd);
    console.log("existing group? " + groupNameValue);
    console.log("group name sent " + groupNameSelected);

    return axios.post("/submitUser", {
        email: this.state.emailRecd,
        password: this.state.passwordRecd,
        confirmPassword: this.state.confirmPasswordRecd,
        firstName:this.state.firstNameRecd,
        lastName:this.state.lastNameRecd,
        groupName: groupNameSelected,
        groupNew: newGroup
      })
      .then( );
      // window.location.href = 'http://localhost:3000/getMyTools'
      // hard coded to go to home page (julie: i changed it to my tools)
  }

    // Login functions
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
        .then(this.setState({showModal: false}))

	    console.log('Email: ' + this.state.email + ' and Password: ' + this.state.password);
  	}
    
    close() {
    	this.setState({showModal: false});
  	}

  	open() {
    	this.setState({showModal: true});

      this.setState({ groupNameRecd: "" }); 
    // get list of group names in the database to show the user to choose
    console.log("Component Did Mount");
    var newArray = this.state.arrayOfGroups;
    var s = $('<select />', { id: "dropDown" });
    $('<option />', { value: -1, text: "Select an Existing Group" }).appendTo(s);
    axios.get("/getGroups", {
    })
    .then(function(response){
      for (var i=0; i < response.data.length; i++) {
         // newArray.push(response.data[i].groupName); 
         $('<option />', { value: i, text: response.data[i].groupName }).appendTo(s);
      }
      s.appendTo('#groupSelect');
    });
    this.setState({ arrayOfGroups: newArray });
    console.log("for group selection");
    console.log(newArray)
  	}

	render() {
    var emailEntered;
    var passwordEntered;
    var confirmPasswordEntered;
    var firstNameEntered;
    var lastNameEntered;
    var groupNameEntered;

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
              Login or Signup now!
          </Button>

          <Modal show={this.state.showModal} onHide={this.close}>
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Login">
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
                    <Button bsStyle="primary" onClick={this.handleSubmit}>Login</Button>
                  </form>
                </Modal.Body>
        </Tab>
              <Tab eventKey={2} title="Sign Up">
                <Modal.Body>
                  <fieldset className="signUpTexts">
          <legend> Please enter your details </legend>
          <input value={emailEntered} onChange={this.handleEmailChange} placeholder="e-mail" />
          <br/><br/>
          <input value={passwordEntered} onChange={this.handlePasswordChange} type="password" placeholder="password" />
          <br/><br/>
          <input value={confirmPasswordEntered} onChange={this.handleConfirmPasswordChange} type="password" placeholder="re-enter password" /> 
          <br/><br/>
          <input value={firstNameEntered} onChange={this.handleFirstNameChange} placeholder="first name" />
          <br/><br/>
          <input value={lastNameEntered} onChange={this.handleLastNameChange} placeholder="last name" />
          <br/><br/>
          
          <div id="groupSelect">
          </div>
          <p>or</p>
          <input value={groupNameEntered} onChange={this.handleGroupNameChange} placeholder="Enter name of New Group" />
          <br/>
        </fieldset>
        <br/>
          <Button bsStyle="success" className="buttonClass" onClick={this.submitUserDetails}>Sign Up</Button>
        </Modal.Body>
              </Tab>
            </Tabs>
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