import React, { Component } from 'react';
import './SignUp.css';
import axios from "axios";
import $ from "jquery";


class SignUp extends Component {
  constructor (props) {
    super(props);

    this.state = { 
      emailRecd: '', 
      passwordRecd: '',
      confirmPasswordRecd: '',
      firstNameRecd: '',
      lastNameRecd: '',
      groupNameRecd: '',
      arrayOfGroups: []
    };

    this.submitUserDetails = this.submitUserDetails.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);  
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleGroupNameChange = this.handleGroupNameChange.bind(this);
  }

  // componentDidMount(){
  //   // get list of group names in the database to show the user to choose
  //   console.log("Component Did Mount");
  //   return axios.get("/getGroups", {
  //     })
  //     .then(function (response) {
  //       console.log("Groups in the Database");
  //       var newArray = this.state.arrayOfGroups.slice();
  //       for (var i=0; i < response.data.length; i++){
  //           console.log(response.data[i].groupName);
  //           console.log("\n");
  //           newArray.push(response.data[i].groupName);   
  //       }
  //       this.setState({ arrayOfGroups:newArray });
  //     })
  //     .catch(function (error) {
  //       console.log("error", error);
  //     });
  // }

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

  render () {
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
        </fieldset>
        <br/>
        <div className="col-sm-06 buttonColumn">
          <button className="buttonClass" onClick={this.submitUserDetails}>Submit</button>
        </div>
      </div>
    )
  }
}

export default SignUp;
