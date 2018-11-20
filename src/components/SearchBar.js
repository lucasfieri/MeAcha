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
			supermarkets: [],
			infoSupermarket: [],
			supermarketSelected: null,
			itens: [],
			value: ''
		};
	}
	componentWillMount() {
		axios.get("http://localhost:3001/supermercado").then(res => {
			this.setState({
				supermarkets: res.data
			});
			const supermarket = this.state.supermarkets.filter(s => { return s.ID_S === parseInt(this.props.supermarketSelected, 10) })[0];
			this.setState({ infoSupermarket: supermarket })
		});
	}
	
	render() {
		const supermarket  = this.state.infoSupermarket;
		return (
			<div>
				<NavBar type={3} name={supermarket.NOME_S} street={supermarket.RUA_S} neighborhood={supermarket.BAIRRO_S} />
				<div className="container-input">
					<input type="text" placeholder="Digite o que deseja buscar" className="input-text"/>
					<button type="submit" className="btn-search"><img src={SearchIcon} alt="Ícone de Busca" className="img-btn-search"/></button>
				</div>
			</div>
		)
	}
}

export default SearchBar;