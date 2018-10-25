import React from 'react';
import ReactDOM from 'react-dom';
import { Router} from "@reach/router";
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
