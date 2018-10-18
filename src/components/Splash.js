import React, { Component } from 'react';
import logo from '../images/logo.png';
import  '../css/splash.css';

class Splash extends Component {
    render() {
        return (
            <div className="splash-container">  
				<img src={logo} className="logo" alt="logo" />
                
            </div>
      );
    }
}

export default Splash;

