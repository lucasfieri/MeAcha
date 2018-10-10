import React, { Component } from 'react';
import logo from '../images/logo.png';
// eslint-disable-next-line
import css from '../css/splash.css';

class Splash extends Component {
    render() {
        return (
            <div className="Splash">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
      );
    }
}

export default Splash;

