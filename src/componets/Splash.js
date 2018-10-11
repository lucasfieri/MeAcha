import React, { Component } from 'react';
import logo from '../images/logo.png';
// eslint-disable-next-line
import css from '../css/splash.css';

class Splash extends Component {
    render() {
        return (
            <div className="container">  
				<img src={logo} id="logo" alt="logo" />
                
            </div>
      );
    }
}

export default Splash;

