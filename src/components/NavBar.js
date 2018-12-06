import React from 'react';
import BtnReturn from '../images/icons/btn-return.png'
import '../css/reset.css';
import '../css/default.css';
import '../css/nav.css';
import { Link } from "@reach/router";


function NavBar({ type, name, street, neighborhood, id, product }) {
	if (type === 1) {
		return(
			<div className="container">
				<nav>
					<h1 className="title">Selecione um supermercado</h1>
				</nav>
			</div>
		)
	}
	else if (type === 2) {
		return (
			<div className="container">
				<nav>
					<Link to="/Shell"><img src={BtnReturn} className="arrow-back" alt="arrow back icon"></img></Link>
					<h1 className="title">{name}</h1>
				</nav>
			</div>
		);
	}
	else if (type === 3) {
		return (
			<div className="container">
				<nav className="nav-search">
					<Link to="/Shell"><img src={BtnReturn} className="arrow-back" alt="arrow back icon"></img></Link>
					<h1 className="title-orange">{name}</h1>
					<h2 className="subtitle-detail">{street}, {neighborhood}</h2>
				</nav>
			</div>
		)
	}
	else {
		return (
			<div className="container">
				<nav className="nav-search">
					<Link to={"/Shell/Splash/Search/" + id}><img src={BtnReturn} className="arrow-back" alt="arrow back icon"></img></Link>
					<h1 className="title-orange">{product}</h1>
					<h2 className="subtitle-detail">{name} - {street}, {neighborhood}</h2>
				</nav>
			</div>
		)
	}
}
export default NavBar;
