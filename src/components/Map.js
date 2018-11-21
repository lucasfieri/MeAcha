import React, { Component } from 'react';
import NavBar from './NavBar';

const axios = require("axios");
const produtosURL = "http://localhost:3001/produto"

class Map extends Component {

	constructor(props) {
		super(props);
		this.state = {
			supermarkets: [],
			infoSupermarket: [],
			supermarketSelected: null,
			results: [],
			query: ''
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
		const supermarket = this.state.infoSupermarket;
		return (
			<div>
				<NavBar type={3} name={supermarket.NOME_S} street={supermarket.RUA_S} neighborhood={supermarket.BAIRRO_S} />
				<div className="container-map">
					
				</div>
			</div>
		)
	}
}

export default Map;
