import React, { Component } from 'react';
import Image from '../images/pt.svg';
import '../css/supermarket.css';
import { Link } from "@reach/router";


class Supermarket extends Component {
  
  render() {
    return (
      <ul className="list-supermarket">
        <li><Link to="Splash/Detail"><img src={Image} className="img-supermarket" alt="Supermercado Extra"></img></Link>
          <p className="supermarket-name">Supermercado</p>
          <div className="buttons">
            <i className="fas fa-volume-up button-volume"></i>
            <div className="box-arrow">
              <i className="fas fa-arrow-right button-arrow"></i>
            </div>
          </div>
        </li>
        <li><Link to="/Detail"><img src={Image} className="img-supermarket" alt="Supermercado Extra"></img></Link>
          <p className="supermarket-name">Supermercado</p>
          <div className="buttons">
            <i className="fas fa-volume-up button-volume"></i>
            <div className="box-arrow">
              <i className="fas fa-arrow-right button-arrow"></i>
            </div>
          </div>
        </li>
        <li><Link to="/Detail"><img src={Image} className="img-supermarket" alt="Supermercado Extra"></img></Link>
          <p className="supermarket-name">Supermercado</p>
          <div className="buttons">
            <i className="fas fa-volume-up button-volume"></i>
            <div className="box-arrow">
              <i className="fas fa-arrow-right button-arrow"></i>
            </div>
          </div>
        </li>
        <li><Link to="/Detail"><img src={Image} className="img-supermarket" alt="Supermercado Extra"></img></Link>
          <p className="supermarket-name">Supermercado</p>
          <div className="buttons">
            <i className="fas fa-volume-up button-volume"></i>
            <div className="box-arrow">
              <i className="fas fa-arrow-right button-arrow"></i>
            </div>
          </div>
        </li>
     </ul>
    );
  }
}

export default Supermarket;
