import React, { Component } from 'react';
import { Router } from "@reach/router";
import Supermarket from './Supermarket';
import SupermarketDetail from './SupermarketDetail';


class Shell extends Component {

  render() {
    return (
      <div>
         <Router>
          <Supermarket path="/" />
          <SupermarketDetail path="Splash/Detail/:supermarketSelected"/>
        </Router> 
      </div>
    );
  }
}

export default Shell;