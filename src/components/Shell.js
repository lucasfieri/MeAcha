import React, { Component } from 'react';
import { Router } from "@reach/router";
import Supermarket from './Supermarket';
import SupermarketDetail from './SupermarketDetail';
import SearchBar from './SearchBar';



class Shell extends Component {

  render() {
    return (
      <div>
{/*          <Router>
          <Supermarket path="/" />
          <SupermarketDetail path="Splash/Detail/:supermarketSelected"/>
        </Router>  */}
        <SearchBar />
      </div>
    );
  }
}

export default Shell;