import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import { Router, Link } from "@reach/router";
import Shell from './components/Shell';
import Splash from './components/Splash';

ReactDOM.render(
    <div>
        <Router>
            <Splash path="/" />
            <Shell path="Shell/*" />
        </Router>  
    </div>
    
, document.getElementById('root')

);
