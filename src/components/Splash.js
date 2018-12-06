import React, { Component } from 'react'
import Logo from '../images/logo.png'
import Star from '../images/star.png'
import '../css/splash.css'

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.location.pathname = "/Shell";
    }, 4000);
  }

  render() {
    return (
      <div className="splash-container">
        <img src={Logo} className="logo" alt="Logotipo do Me Acha" />
        <div className="star-container">
          <img src={Star} className="star" id="star-1" alt="Estrelas" />
          <img src={Star} className="star" id="star-2" alt="Estrelas" />
          <img src={Star} className="star" id="star-3" alt="Estrelas" />
        </div>
      </div>
    );
  }
}

export default Splash;

