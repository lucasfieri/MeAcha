import React, { Component } from 'react';
import NavBar from './NavBar';
/* import Rota from '../images/eletronicos.png'; */
import '../css/map.css';

const axios = require("axios");
const supermercadosURL = "http://localhost:3001/supermercado/"

class Map extends Component {

	constructor(props) {
		super(props);
		this.state = {
			supermarkets: [],
			infoSupermarket: [],
			planta: []
		};

	}
	componentWillMount() {
		console.log(this.props.product)
		axios.get("http://localhost:3001/supermercado").then(res => {
			this.setState({
				supermarkets: res.data
			});
			const supermarket = this.state.supermarkets.filter(s => { return s.ID_S === parseInt(this.props.supermarketChecked, 10) })[0];
			this.setState({ infoSupermarket: supermarket })
		});
		this.getPlanta();
	}

	getPlanta = () => {
		axios.get(`${supermercadosURL}${this.props.supermarketChecked}`).then(res => {
			this.setState({
				planta: res.data
			});
		});
	}

	render() {
		const supermarket = this.state.infoSupermarket;
		return (
			<div>
				<NavBar type={3} name={supermarket.NOME_S} street={supermarket.RUA_S} neighborhood={supermarket.BAIRRO_S} />
				<div className="container-map">
				{this.state.planta.map((planta, index) => (
					<img src={require(`../images/maps/${planta.PLANTA_S}`)} alt={"Planta " + supermarket.NOME_S} key={index} className="mapa"></img>
				))}
				{this.state.rota.map((rota, index) => (
					<img src={require(`../images/maps/${planta.PLANTA_S}`)} alt={"Planta " + supermarket.NOME_S} key={index} className="mapa"></img>
				))}
				</div>
			</div>
		)
	}
}

export default Map;
