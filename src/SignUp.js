import React, { Component } from 'react';
import './SignUp.css';
import axios from "axios";



class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      emailRecd: '', 
      passwordRecd: '',
      confirmPasswordRecd: '',
      firstNameRecd: '',
      lastNameRecd: '',
      addressOneRecd: '',
      addressTwoRecd: '',
      cityRecd: '',
      stateRecd: '',
      zipRecd: ''
    };

    this.submitUserDetails = this.submitUserDetails.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);  
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleAddressOneChange = this.handleAddressOneChange.bind(this);
    this.handleAddressTwoChange = this.handleAddressTwoChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
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
  handleAddressOneChange(e) {
    this.setState({ addressOneRecd: e.target.value });
    console.log(" address One entered");
  }
  handleAddressTwoChange(e) {
    this.setState({ addressTwoRecd: e.target.value });
    console.log("address Two entered");
  }
  handleCityChange(e) {
    this.setState({ cityRecd: e.target.value });
    console.log("city entered");
  }
  handleStateChange(e) {
    this.setState({ stateRecd: e.target.value });
    console.log("state entered");
  }
  handleZipChange(e) {
    this.setState({ zipRecd: e.target.value });
    console.log("zip entered");
  }
  submitUserDetails() {

    console.log("Submit button clicked to sign up");
    console.log("email = " + this.state.emailRecd);
    console.log("zip = " + this.state.zipRecd);

    return axios.post("/submitUser", {
        email: this.state.emailRecd,
        password: this.state.passwordRecd,
        confirmPassword: this.state.confirmPasswordRecd,
        firstName:this.state.firstNameRecd,
        lastName:this.state.lastNameRecd,
        addressOne: this.state.addressOneRecd,
        addressTwo: this.state.addressTwoRecd,
        city: this.state.cityRecd,
        state: this.state.stateRecd,
        zip: this.state.zipRecd
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
    var addressOneEntered;
    var addressTwoEntered;
    var cityEntered;
    var stateEntered;
    var zipEntered;

    return (
      <div className="SignUp">
        <br/><br/>
        <fieldset className="signUpTexts">
          <legend> Enter your details </legend>
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
          <input value={addressOneEntered} onChange={this.handleAddressOneChange} placeholder="address1" />
          <br/><br/>
          <input value={addressTwoEntered} onChange={this.handleAddressTwoChange} placeholder="address2" />
          <br/><br/>
          <input value={cityEntered} onChange={this.handleCityChange} placeholder="city" />
          <br/><br/>
          <input value={stateEntered} onChange={this.handleStateChange} placeholder="state" />
          <br/><br/>
          <input value={zipEntered} onChange={this.handleZipChange} placeholder="zip" />
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
