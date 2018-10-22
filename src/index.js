import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import { Router, Link } from "@reach/router";
import Shell from './components/Shell';
import Splash from './components/Splash';
import SupermarketDetail from './components/SupermarketDetail'

ReactDOM.render(
    
    <SupermarketDetail></SupermarketDetail>
    //<div>
       // <Router>
            //<Splash path="/" />
            //<Shell path="Shell/*" />
        //</Router>  
    //</div>
    
, document.getElementById('root')

);
