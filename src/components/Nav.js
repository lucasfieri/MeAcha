import React, { Component } from 'react';
import '../css/nav.css';


class Nav extends Component {
  render() {
    return (
        <nav>
            <h1 className="title">Selecione um supermercado</h1>
            <i className="far fa-eye eye"></i>
        </nav>
    );
  }
}

export default Nav;
