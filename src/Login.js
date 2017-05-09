import React, { Component } from 'react';
import './Login.css';
import axios from "axios";
import App from './App';

import Modal from 'react-bootstrap/lib/Modal';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Button from 'react-bootstrap/lib/Button';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';

// CURRENTLY NOT IN USE. GREETINGS COMPONENT HAS LOGIN

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      user: {
      	email: '',
      	password: ''
      },
      userLogged: '',
      isLoggedIn: false
      // ,      showModal: false
      // ,      buttonPressed: false
    };
    // this.fade = this.fade.bind(this);
    // this.open = this.open.bind(this);
    // this.close = this.close.bind(this);
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

  // axios.get("/checkLogin").then(res => {
  //       console.log("inside axios");
  //       console.log(res.data);
  //       this.setState({userLogged: res.data.firstName});
  //     })

  // close() {
  //   this.setState({showModal: false});
  // }

  // open() {
  //   this.setState({showModal: true});
  // }

  // fade() {
  //   this.setState({buttonPressed: true})
  // }

  render() {

    // var overlay = this.state.buttonPressed ? <div className="overlay" /> : null;
    // {overlay}
    return (
      <div className="login">
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
     
        
      </div>
    );
  }
}

export default Login;

// Code for modal
// <Button
//             bsStyle="primary"
//             bsSize="large"
//             onClick={this.open}
//           >
//               Login
//           </Button>

//     <Modal show={this.state.showModal} onHide={this.close}>
//       <Modal.Body>
//         <form onSubmit={this.handleSubmit}>
//           <h4>
//             <strong>Email</strong>
//           </h4>
//           <input
//             type="text"
//             value={this.state.text}
//             id="email"
//             onChange={this.handleChange}
//             required
//           /><br/>

//           <h4>
//             <strong>Password</strong>
//           </h4>
//           <input
//             type="password"
//             value={this.state.text}
//             id="password"
//             onChange={this.handleChange}
//             required
//           /><br/><br/>

//           <button onClick={this.handleSubmit}>Login</button>
//         </form>
//       </Modal.Body>

//       <Modal.Footer>
//         <Button onClick={this.close}>Close</Button>
//       </Modal.Footer>
//     </Modal>