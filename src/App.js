import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyTools from './MyTools';
import Greeting from './Greeting';

class App extends Component {
  render() {
    return this.props.isLoggedIn ? <MyTools /> : <Greeting />;
  }
}

export default App;
