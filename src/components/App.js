import React, { Component } from 'react';
import '../css/reset.css';
import '../css/default.css';
import '../css/nav.css';

class App extends Component {

  render() {
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

export default App;
