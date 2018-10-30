import React, { Component } from 'react';
import { Router } from "@reach/router";
import Nav from './Nav';
import Supermarket from './Supermarket';
import SupermarketDetail from './SupermarketDetail';

class Shell extends Component {
  
  render() {
    return (
      <div>
        <Nav propsdaNav={1} />
        <Router>
          <Supermarket path="/" />
          <SupermarketDetail path="Splash/Detail" />
        </Router>
      </div>
    );
  }
}

export default Shell;


