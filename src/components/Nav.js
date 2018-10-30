import React, { Component } from 'react';
import '../css/reset.css';
import '../css/default.css';
import '../css/nav.css';
import { Link } from "@reach/router";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navEstado: this.props.propsdaNav
    }
  }

  render() {
    if (this.state.navEstado === 0) {
      return (
        <div className="container">
          <nav>
            <h1 className="title">Selecione um supermercado</h1>
            <i className="far fa-eye eye"></i>
          </nav>
        </div>
      );
    }

    else if (this.state.navEstado === 1) {
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
