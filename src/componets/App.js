import React, { Component } from 'react';
import logo from '../images/logo.png';
// eslint-disable-next-line
import css from '../css/splash.css';


class App extends Component {
  render() {
    return (
      <div className="App">
		<div className="Splash">
          <img src={logo} className="App-logo" alt="logo" />
		</div>
      </div>
    );
  }
}

export default App;
