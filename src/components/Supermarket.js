import React, { Component } from 'react';
import Image from '../images/extra.png';
import '../css/supermarket.css';


class Supermarket extends Component {
  render() {
    return (
      <ul className="list-supermarket">
        <li><img src={Image} className="img-supermarket" alt="Supermercado Extra"></img>
          <p className="supermarket-name">Supermercado</p>
          <div className="buttons">
            <i className="fas fa-volume-up button-volume"></i>
            <div className="box-arrow">
              <i className="fas fa-arrow-right button-arrow"></i>
            </div>
          </div>
        </li>
        <li> <img src={Image} className="img-supermarket" alt="Supermercado Extra"></img>
          <p className="supermarket-name">Supermercado</p>
          <div className="buttons">
            <i className="fas fa-volume-up button-volume"></i>
            <div className="box-arrow">
              <i className="fas fa-arrow-right button-arrow"></i>
            </div>
          </div>
        </li>
        <li><img src={Image} className="img-supermarket" alt="Supermercado Extra"></img>
          <p className="supermarket-name">Supermercado</p>
          <div className="buttons">
            <i className="fas fa-volume-up button-volume"></i>
            <div className="box-arrow">
              <i className="fas fa-arrow-right button-arrow"></i>
            </div>
          </div>
        </li>
        <li><img src={Image} className="img-supermarket" alt="Supermercado Extra"></img>
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
