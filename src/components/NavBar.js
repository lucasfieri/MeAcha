import React, { Component } from 'react';
import '../css/reset.css';
import '../css/default.css';
import '../css/nav.css';
import { Link } from "@reach/router";

class NavBar extends Component {

	render() {
		if (this.props.type === 1) {
			return (
				<div className="container">
					<nav>
						<h1 className="title">Selecione um supermercado</h1>
					</nav>
				</div>
			);
		}
		else if (this.props.type === 2) {
			return (
				<div className="container">
					<nav>
						<Link to="/Shell"><i className="fas fa-chevron-left arrow-back"></i></Link>
						<h1 className="title">Supermercado 1</h1>
					</nav>
				</div>
			);
		}
		else {
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
}

export default NavBar;
