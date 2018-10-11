import React, { Component } from 'react';
import logo from '../images/logo.png';
// eslint-disable-next-line
import css from '../css/splash.css';

class Splash extends Component {
    render() {
        return (
            <div className="container">
	            <div className="row">
	            	<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<img src={logo} id="logo" alt="logo" />
	            	</div>
	            </div>
            </div>
      );
    }
}

export default Splash;

