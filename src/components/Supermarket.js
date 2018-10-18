import React, { Component } from 'react';
import Image from '../images/extra.png';
import '../css/supermarket.css';



class Supermarket extends Component {
  render() {
    return (
      <ul className="list-supermarket">
        <li><img src={Image} className="img-supermarket" alt="Supermercado Extra"></img>
        <p>Supermercado</p>
        <div className="buttons"><i className="fas fa-volume-up"></i><i className="fas fa-arrow-right"></i></div></li>
        <li> <img src={Image} className="img-supermarket" alt="Supermercado Extra"></img>
        <p>Supermercado</p>
        <div className="buttons"><i className="fas fa-volume-up"></i><i className="fas fa-arrow-right"></i></div></li>
        <li><img src={Image} className="img-supermarket" alt="Supermercado Extra"></img>
        <p>Supermercado</p>
        <div className="buttons"><i className="fas fa-volume-up"></i><i className="fas fa-arrow-right"></i></div></li>
        <li><img src={Image} className="img-supermarket" alt="Supermercado Extra"></img>
        <p>Supermercado</p>
        <div className="buttons"><i className="fas fa-volume-up"></i><i className="fas fa-arrow-right"></i></div></li>

     </ul>
        
    
    );
  }
}

export default Supermarket;
