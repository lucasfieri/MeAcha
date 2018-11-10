import React, { Component } from 'react';
import BtnReturn from '../images/icons/btn-return.png'
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
						<Link to="/Shell"><img src={BtnReturn} className="arrow-back" alt="arrow back icon"></img></Link>
						<h1 className="title">{this.props.name}</h1>
					</nav>
				</div>
			);
		}
		else {
			return (
				<div className="container">
					<nav>
						<Link to="/Shell"><img src={BtnReturn} className="arrow-back"  alt="arrow back icon"></img></Link>
						<h1 className="title">Supermercado 1</h1>

					</nav>
				</div>
			);
		}
	}
}

export default NavBar;
