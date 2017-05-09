import React, { Component } from 'react';
import Login from './Login'
import axios from 'axios';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem  } from 'react-bootstrap'

export default class MyNavbar extends Component {

  // constructor() {
  //   super();
  //   var user = cookie.load('user');
  //   var that = this;
  //   this.state = {
  //     name: null,
  //     signedIn: false,
  //     authModal: false
  //   }
  //   if (user) {
  //     axios.get('https://api.dashwink.tech/users/' + user.id)
  //       .then(function (response) {
  //         that.setState({
  //           name: response.data.data.attributes['first-name'] + ' ' + response.data.data.attributes['last-name'],
  //           signedIn: true
  //         });
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //     }
  //   this.render.bind(this);
  // }

  // handleToggleModal({authModal}) {
  //   this.setState({
  //   	authModal: authModal
  //   })
  // }

  render() {

    return (
      <div>
        <Navbar inverse className="navbar-wrapper">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><span className="dashwink-txt">DASHWINK</span></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="navleft">
              <NavItem>Shop <i className="fa fa-home"></i></NavItem>
              <NavItem>Explore <i className="fa fa-compass"></i></NavItem>
              <NavItem>Alerts <i className="fa fa-bell-o"></i></NavItem>
            </Nav>
            <Nav pullRight className="navright">
              <NavItem>Style Game</NavItem>
              <NavItem>Editor's Blog</NavItem>
              <NavItem className={this.state.signedIn ? '' : 'hidden'}>{this.state.name}</NavItem>
            <NavItem onClick={() => this.handleToggleModal('login')} className={this.state.signedIn ? 'hidden' : ''}>Login</NavItem>
              <NavItem onClick={() => this.handleToggleModal('signup')} className={this.state.signedIn ? 'hidden' : ''}>Sign Up</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AuthModal authModal={this.state.authModal} />
      </div>
    );
  }
}
