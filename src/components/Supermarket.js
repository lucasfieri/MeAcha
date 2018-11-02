import React, { Component } from 'react';
import Image from '../images/pt.svg';
import FirstNav from './FirstNav';
import '../css/supermarket.css';
import { Link } from "@reach/router";
const axios = require("axios");


class Supermarket extends Component {

  constructor(props) {
    super(props);
    this.state = {
      supermarket: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/supermercado").then(res => {  
    this.setState({ supermarket: res.data })
    console.log(this.state.supermarket)
    })

  }
  render() {
    return (
      <div>
        <FirstNav />
        <ul className="list-supermarket">
          <li><Link to="Splash/Detail"><img src={Image} className="img-supermarket" alt="Supermercado Extra"></img></Link>
            <p className="supermarket-name">{this.state.supermarket}</p>
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
      </div>
    );
  }
}

export default Supermarket;
