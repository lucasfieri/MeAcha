import React, { Component } from 'react';
import NavBar from './NavBar';
import '../css/map.css';

const axios = require("axios");
const supermercadosURL = "http://192.168.0.20:3001/supermercado/"
const rotaURL = "http://192.168.0.20:3001/research/"

class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			supermarkets: [],
			infoSupermarket: [],
			planta: [],
			rota: []
		};
	}

	componentWillMount() {
		axios.get("http://192.168.0.20:3001/supermercado").then(res => {
			this.setState({
				supermarkets: res.data
			});
			const supermarket = this.state.supermarkets.filter(s => { return s.ID_S === parseInt(this.props.supermarketChecked, 10) })[0];
			this.setState({ infoSupermarket: supermarket })
		});
		this.getPlanta();
		this.getRota();
	}

	getPlanta = () => {
		axios.get(`${supermercadosURL}${this.props.supermarketChecked}`).then(res => {
			this.setState({
				planta: res.data
			});
		});
	}

	getRota = () => {
		const idProduto = window.localStorage.getItem('id');
		axios.get(`${rotaURL}${this.props.supermarketChecked}/${idProduto}`).then(res => {
			this.setState({
				rota: res.data
			});
		});
	}
	componentDidMount(){
		var teste = document.getElementById('container-map');
		teste.scrollIntoView();
	}

	render() {
		const supermarket = this.state.infoSupermarket;
		return (
			<div>
				<NavBar type={4} name={supermarket.NOME_S} id={supermarket.ID_S} street={supermarket.RUA_S} neighborhood={supermarket.BAIRRO_S} />
				<div className="container-map" id="container-map">
					{this.state.planta.map((planta, index) => (
						<img src={require(`../images/maps/${planta.PLANTA_S}`)} alt={"Planta " + supermarket.NOME_S} key={index} className="mapa"></img>
					))}
					{this.state.rota.map((rota, index) => (
						<img src={require(`../images/maps/routes/${rota.IMAGEM_PC}`)} alt={"Corredor"} key={index} className="rota"></img>	
					))}
				</div>
			</div>
		)
	}
}

export default Map;