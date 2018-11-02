import React, { Component } from 'react';
import '../css/reset.css';
import '../css/default.css';
import '../css/nav.css';
import { Link } from "@reach/router";

class SecondNav extends Component {

	render() {
		return (
			<div className="container">
				<nav>
					<Link to="/Shell"><i className="fas fa-chevron-left arrow-back"></i></Link>
					<h1 className="title">Supermercado 1</h1>
				</nav>
			</div>
		);
	}
}

export default SecondNav;
