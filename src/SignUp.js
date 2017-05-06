import React, { Component } from 'react';
import './SignUp.css';
import axios from "axios";

var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
script.type = 'text/javascript';


class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      emailRecd: '', 
      passwordRecd: '',
      confirmPasswordRecd: '',
      firstNameRecd: '',
      lastNameRecd: '',
      groupNameRecd: ''
    };

    this.submitUserDetails = this.submitUserDetails.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);  
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleGroupNameChange = this.handleGroupNameChange.bind(this);
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
    console.log("email = " + this.state.emailRecd);
    console.log("Group Name = " + this.state.groupNameRecd);

    return axios.post("/submitUser", {
        email: this.state.emailRecd,
        password: this.state.passwordRecd,
        confirmPassword: this.state.confirmPasswordRecd,
        firstName:this.state.firstNameRecd,
        lastName:this.state.lastNameRecd,
        groupName: this.state.groupNameRecd
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }

  render() {
    var emailEntered;
    var passwordEntered;
    var confirmPasswordEntered;
    var firstNameEntered;
    var lastNameEntered;
    var groupNameEntered;

    return (
      <div className="SignUp">
      <h2> Sign up to Share Tools!</h2>
        <br/><br/>
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
          <input value={groupNameEntered} onChange={this.handleGroupNameChange} placeholder="Group Name" />
          <br/><br/>
        </fieldset>
        <br/>
        <div className="col-sm-06 buttonColumn">
          <button className="buttonClass" onClick={this.submitUserDetails}>Submit</button>
        </div>
      </div>
    );
  }
}

export default SignUp;
