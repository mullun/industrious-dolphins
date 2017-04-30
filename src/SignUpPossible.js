import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      emailInput: '';
      passwordInput: '';
      confirmPasswordInput: '';
      firstNameInput: '';
      lastNameInput: '';
      addressOneInput: '';
      addressTwoInput: '';
      cityInput: '';
      stateInput: '';
      zipInput: '';
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleFirstNameChange = this.handleFirstChange.bind(this);
    this.handleLastNameChange = this.handleLastChange.bind(this);
    this.handleAddressOneChange = this.handleAddressOneChange.bind(this);
    this.handleAddressTwoChange = this.handleAddressTwoChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.submitUserDetails = this.submitUserDetails.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ emailInput: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({passwordInput: e.target.value });
  }

  handleConfirmPasswordChange(e) {
    this.setState({confirmPasswordInput: e.target.value });
  }

  handleFirstNameChange(e) {
    this.setState({firstNameInput: e.target.value });
  }


  handleLastNameChange(e) {
    this.setState({lastNameInput: e.target.value });
  }


  handleAddressOneChange(e) {
    this.setState({addressOneInput: e.target.value });
  }


  handleAddressTwoChange(e) {
    this.setState({addressTwoInput: e.target.value });
  }


  handleCityChange(e) {
    this.setState({cityInput: e.target.value });
  }

  handleStateChange(e) {
    this.setState({ stateInput: e.target.value });
  }

  handleZipChange(e) {
    this.setState({ zipInput: e.target.value });
  }

  submitUserDetails() {

    console.log("Submit button clicked to sign up");

    this.setState({ emailInput: emailInput });
  
    this.setState({passwordInput: passwordInput });
  
    this.setState({confirmPasswordInput: confirmPasswordInput });
 
    this.setState({firstNameInput: firstNameInput });
  
    this.setState({lastNameInput: lastNameInput });
  
    this.setState({addressOneInput: addressOneInput });
 
    this.setState({addressTwoInput: addressTwoInput });
 
    this.setState({cityInput: cityInput });
  
    this.setState({ stateInput: stateInput });
 
    this.setState({ zipInput: zipInput });




      var url = "/signup";

      $.ajax({
        type: "POST",
        url: url,
        
        success: function(data) {
          alert(data); 
        }
      });
  }

  render() {
    return (
      <div className="SignUp">
        <br/><br/>
        <div className="col-sm-06 leftColumn">
        <label className="userDetails">User Name (e-mail address): </label>
        </div>
        <div className="col-sm-06 rightColumn">
        <input value={emailInput} id="emailInput" type="text" placeholder="e-mail" />
        </div>
        <br/><br/>
        <div className="col-sm-06 leftColumn">
        <label className="userDetails">password: </label>
        </div>
        <div className="col-sm-06 rightColumn">
        <input id="passwordInput" type="text" placeholder="password" />
        </div>
        <br/><br/>
        <div className="col-sm-06 leftColumn">
        <label className="userDetails">confirm password: </label>
        </div>
        <div className="col-sm-06 rightColumn">
        <input id="confirmPasswordInput" type="text" placeholder="confirm password" />
        </div>
        <br/><br/>
        <div className="col-sm-06 leftColumn">
        <label className="userDetails">First Name: </label>
        </div>
        <div className="col-sm-06 rightColumn">
        <input id="firstNameInput" type="text" placeholder="First Name" />
        </div>
        <br/><br/>
        <div className="col-sm-06 leftColumn">
        <label className="userDetails">Last Name: </label>
        </div>
        <div className="col-sm-06 rightColumn">
        <input id="lastNameInput" type="text" placeholder="Last Name" />
        </div>
        <br/><br/>
        <div className="col-sm-06 leftColumn">
        <label className="userDetails">Address 1: </label>
        </div>
        <div className="col-sm-06 rightColumn">
        <input id="addressOneInput" type="text" placeholder="Address 1" />
        </div>
        <br/><br/>
        <div className="col-sm-06 leftColumn">
        <label className="userDetails">Address 2: </label>
        </div>
        <div className="col-sm-06 rightColumn">
        <input id="addressTwoInput" type="text" placeholder="Address 2" />
        </div>
        <br/><br/>
        <div className="col-sm-06 leftColumn">
        <label className="userDetails">City: </label>
        </div>
        <div className="col-sm-06 rightColumn">
        <input id="cityInput" type="text" placeholder="City" />
        </div>
        <br/><br/>
        <div className="col-sm-06 leftColumn">
        <label className="userDetails">State: </label>
        </div>
        <div className="col-sm-06 rightColumn">
        <input id="stateInput" type="text" placeholder="State" />
        </div>
        <br/><br/>
        <div className="col-sm-06 leftColumn">
        <label className="userDetails">Zip Code: </label>
        </div>
        <div className="col-sm-06 rightColumn">
        <input id="zipInput" type="text" placeholder="Zip" />
        </div>
        <br/><br/>
        <div className="col-sm-06 buttonColumn">
          <button className="buttonClass" onClick={this.submitUserDetails}>Submit</button>
        </div>
      </div>
    );
  }
}

export default SignUp;
