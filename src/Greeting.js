import React, { Component } from 'react';
import axios from "axios";
import $ from "jquery";
import './Greeting.css';
import {
    Modal,
    Button,
    Tabs,
    Tab,
    FormControl,
    Alert
} from 'react-bootstrap/lib/';

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
        alertVisible: false,

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
    this.handleGroupNameChange = this.handleGroupNameChange.bind(this);

    // Login binds
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Signup functions
    handleGroupNameChange(e) {
        this.setState({ groupNameRecd: e.target.value });
        console.log(" Group Name entered");
        console.log(e.target.value)
    }

    submitUserDetails(event) {
        
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
        console.log("email = " + this.state.emailRecd);
        console.log("existing group? " + groupNameValue);
        console.log("group name sent " + groupNameSelected);

        event.preventDefault();
        return axios.post("/submitUser", {
            email: this.state.emailRecd,
            password: this.state.passwordRecd,
            confirmPassword: this.state.confirmPasswordRecd,
            firstName:this.state.firstNameRecd,
            lastName:this.state.lastNameRecd,
            groupName: groupNameSelected,
            groupNew: newGroup
        })
        .then(this.setState({showModal: false}));
    // window.location.href = 'http://localhost:3000/getMyTools'
    // hard coded to go to home page
    }

    // Login functions
    handleChange(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        console.log("inside handlechange")
        console.log(newState)
        this.setState(newState);
    }

    handleSubmit(event) {
        event.preventDefault();
       
        this.setState({alertVisible: false});
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
        var newArray = this.state.arrayOfGroups;
        var s = $('<select class="form-control" id="dropDown">');
        $('<option />', { value: -1, text: "Select an Existing Group" }).appendTo(s);
        axios.get("/getGroups", {})
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
        var groupNameEntered;

        return(
// <h1>Need a tool but don't want to buy it? Borrow it from a friend!</h1>
            <div className="container">
                <div className="Mission">
                    <h1 className="white">ToolShare</h1>
                    <p className="white">The "Airbnb" for tools. Why buy when you can share?</p>

                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        onClick={this.open}
                    >
                    Sign in or Sign up now!
                    </Button>

                    <Modal show={this.state.showModal} onHide={this.close} bsSize="small" aria-labelledby="contained-modal-title-sm">
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Sign In">
                                <Modal.Body>
                                    <h2 className="black">Welcome back!</h2>

                                    <form onSubmit={this.handleSubmit}>
                                        <FormControl
                                        type="text"
                                        value={this.state.text}
                                        id="email"
                                        onChange={this.handleChange}
                                        placeholder="E-mail"
                                        required
                                        /><br/>

                                        <FormControl
                                        type="password"
                                        value={this.state.text}
                                        id="password"
                                        onChange={this.handleChange}
                                        placeholder="Password"
                                        required
                                        /><br/>

                                        <Button type="submit" bsStyle="primary">Sign In</Button>
                                    </form>
                                </Modal.Body>
                            </Tab>
                            <Tab eventKey={2} title="Sign Up">
                                <Modal.Body>
                                    <h2 className="black">Join the club!</h2>

                                    {/* <form className="signUpTexts"> */}

                                    <form onSubmit={this.submitUserDetails}>
                                        <FormControl
                                        type="text"
                                        value={this.state.text}
                                        id="emailRecd"
                                        onChange={this.handleChange}
                                        placeholder="E-mail"
                                        required
                                        /><br/>

                                        <FormControl
                                        type="password"
                                        value={this.state.text}
                                        id="passwordRecd"
                                        onChange={this.handleChange}
                                        placeholder="Password"
                                        required
                                        /><br/>

                                        <FormControl
                                        type="password"
                                        value={this.state.text}
                                        id="confirmPasswordRecd"
                                        onChange={this.handleChange}
                                        placeholder="Confirm Password"
                                        required
                                        /><br/>

                                        <FormControl
                                        type="text"
                                        value={this.state.text}
                                        id="firstNameRecd"
                                        onChange={this.handleChange}
                                        placeholder="First Name"
                                        required
                                        /><br/>

                                        <FormControl
                                        type="text"
                                        value={this.state.text}
                                        id="lastNameRecd"
                                        onChange={this.handleChange}
                                        placeholder="Last Name"
                                        required
                                        /><hr/>

                                        <div className="form-group" id="groupSelect"></div>
                                        <p>or</p>

                                        <FormControl value={groupNameEntered} onChange={this.handleGroupNameChange} placeholder="Create a New Group" /><hr/>
                                    
                                        <Button type="submit" bsStyle="primary" className="buttonClass">Sign Up</Button>
                                    </form>
                                </Modal.Body>
                            </Tab>
                        </Tabs>

                        <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        ); // end return
    }
}

export default Greeting;