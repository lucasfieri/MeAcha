import React, { Component } from 'react';
import '../css/reset.css';
import '../css/default.css';
import '../css/nav.css';
import { Link } from "@reach/router";

class Nav extends Component {

  render() {
  const screen = window.localStorage.getItem("activeScreen")
    if (screen === "home") {
      return (
        <div className="container">
          <nav>
            <h1 className="title">Selecione um supermercado</h1>
            <i className="far fa-eye eye"></i>
          </nav>
        </div>
      );
    }

    else if (screen === "detail") {
      return (
        <div className="container">
          <nav>
            <Link to="/Shell"><i className="fas fa-chevron-left arrow-back"></i></Link>
            <h1 className="title">Supermercado 1</h1>
          </nav>
        </div>
      );
    }

    else {
      return (
        <div className="container">
          <nav>
            <h1 className="title">Selecione um supermercado</h1>
            <i className="far fa-eye eye"></i>
          </nav>
        </div>
      );
    }


  }
}

export default Nav;
