import React, { Component } from 'react';
import NavBar from './NavBar';
import Mapa from '../images/mapa.png';
import Rota from '../images/eletronicos.png';
import '../css/map.css';

const axios = require("axios");

class Map extends Component {

	constructor(props) {
		super(props);
		this.state = {
			supermarkets: [],
			infoSupermarket: [],
			supermarketSelected: null,
		};

	}
	componentWillMount() {
		axios.get("http://localhost:3001/supermercado").then(res => {
			this.setState({
				supermarkets: res.data
			});
			const supermarket = this.state.supermarkets.filter(s => { return s.ID_S === parseInt(this.props.supermarketChecked, 10) })[0];
			this.setState({ infoSupermarket: supermarket })
		});
	}

	render() {
		const supermarket = this.state.infoSupermarket;
		return (
			<div>
				<NavBar type={3} name={supermarket.NOME_S} street={supermarket.RUA_S} neighborhood={supermarket.BAIRRO_S} />
				<div className="container-map">
					<img src={Mapa} className="mapa" alt="mapa"/>
					<img src={Rota} className="rota" alt="rota"/>
				</div>
			</div>
		)
	}
}

export default Map;
