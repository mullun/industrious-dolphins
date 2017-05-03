import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	NavLink
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import SignUp from './SignUp';
import App from './App';
import Landing from './Landing';
import './index.css';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

ReactDOM.render(

  <Router>
    <div className="container">
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>      
			      </button>
			      <a className="navbar-brand" href="#">Tool Share</a>
			    </div>
			    <div id="navbar" className="navbar-collapse collapse">
			      <ul className="nav navbar-nav">
			        <li><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
			        <li><NavLink activeClassName="activeNav" to="/mytools">My Tools</NavLink></li>
			        <li><NavLink activeClassName="activeNav" to="/addtool">Add a Tool</NavLink></li>
			        <li><NavLink activeClassName="activeNav" to="/borrowtool">Borrow a Tool</NavLink></li>
			        <li><NavLink activeClassName="activeNav" to="/returntool">Return a Tool</NavLink></li>
			        <li><NavLink activeClassName="activeNav" to="/replacetool">Replace a Tool</NavLink></li>
			        <li><NavLink activeClassName="activeNav" to="/submitUser">Sign Up</NavLink></li>
			      </ul>
			    </div>
			  </div>
			</nav>
      <Route exact path="/" component={App}> ></Route>
      <Route path="/mytools" component={Mine} history={history}></Route>
      <Route path="/mytools" component={Add} history={history}></Route>
      <Route path="/mytools" component={Borrow} history={history}></Route>
      <Route path="/mytools" component={Return} history={history}></Route>
      <Route path="/mytools" component={Replace} history={history}></Route>
	  <Route path="/submitUser" component={SignUp} history={history} ></Route>
    </div>
  </Router>

	,
	document.getElementById('root')
);
