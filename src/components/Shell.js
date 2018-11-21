import React, { Component } from 'react';
import { Router } from "@reach/router";
import Supermarket from './Supermarket';
import SupermarketDetail from './SupermarketDetail';
import SearchBar from './SearchBar';
import Map from './Map';

class Shell extends Component {

  render() {
    return (
      <div>
        <Router>
          <Supermarket path="/" />
          <SupermarketDetail path="Splash/Detail/:supermarketSelected"/>
          <SearchBar path="Splash/Search/:supermarketSelected" />
          <Map path="Shell/:supermarketSelected/:product" />
        </Router>  
      </div>
    );
  }
}
export default Shell;