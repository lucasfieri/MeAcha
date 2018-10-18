import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Supermarket from './components/Supermarket';
import App from './components/App';
import Splash from './components/Splash';
import Nav from './components/Nav';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/App"  component={App} />
            <Route path="/Supermarket"  component={Supermarket} />
            <Route path="/Splash"  component={Splash} />
            <Route path="/Nav"  component={Nav} />

        </Switch>
    </BrowserRouter>
, document.getElementById('root')

);
