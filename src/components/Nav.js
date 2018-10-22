
import React, { Component } from 'react';
// eslint-disable-next-line
import { Router, Link } from "@reach/router";
import App from './App';
import Supermarket from './Supermarket';


class Nav extends Component {
    render() {
      return (
        <div>
            <App />
            <Router>
                <Supermarket path="/" />
            </Router>  
        </div>
      );
    }
  }
  
  export default Nav;
  
    
