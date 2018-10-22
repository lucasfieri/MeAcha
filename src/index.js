import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import { Router} from "@reach/router";
import Nav from './components/Nav';
import Splash from './components/Splash';
import SupermarketDetail from './components/SupermarketDetail'

ReactDOM.render(
    <div>
        <Router>
            <Splash path="/" />
            <Nav path="Nav/*" />
            <SupermarketDetail path="/Detail" />
        </Router>  
    </div>
, document.getElementById('root')

);
