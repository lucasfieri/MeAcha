import React, { Component } from 'react';
import { Router } from "@reach/router";
import Nav from './Nav';
import Supermarket from './Supermarket';
import SupermarketDetail from './SupermarketDetail';

class Shell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shellEstado: 0
    }
  }
  
  myCallback = (dataFromChild) => {
   this.setState ({shellEstado: dataFromChild})
  }
  render() {
    return (
      <div>
        <Nav propsdaNav={0} />
        <Router>
          <Supermarket path="/" />
          <SupermarketDetail path="Splash/Detail" propDetail={this.myCallback} />
        </Router>
      </div>
    );
  }
}

export default Shell;


