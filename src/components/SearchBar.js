import React, { Component } from 'react';
import NavBar from './NavBar';
import '../css/reset.css';
import '../css/default.css';
import '../css/search.css';
import SearchIcon from '../images/icons/btn-search.png'
const axios = require("axios");

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			itens: [],
			value: ''
		};
	}

	render() {
		return (
			<div>
				<NavBar type={3} name={"Supermarcado 1"} street={"Avenida Indefinida, 111"} neighborhood={"Jd. Santa Rosália"} />
				<div className="container-input">
					<input type="text" placeholder="Digite o que deseja buscar" className="input-text"/>
					<button type="submit" className="btn-search"><img src={SearchIcon} alt="Ícone de Busca" className="img-btn-search"/></button>
				</div>
			</div>
		)
	}
}

export default SearchBar;