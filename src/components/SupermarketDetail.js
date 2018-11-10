import React, { Component } from 'react';
import NavBar from './NavBar';
import Image from '../images/irelia.png'
import '../css/supermarketdetail.css';
const axios = require("axios");



class SupermarketDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			supermarkets: [],
			infoSupermarket: []
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
		return (
			<div>
				<NavBar type={2} name={this.state.infoSupermarket.NOME_S} />
				<div className="containerDetail">
					<div className="image-border" >
					<img src={Image} className="detail" alt={this.state.infoSupermarket.NOME_S} />
					</div>
					<h2 className="name-supermarket-detail color-detail">{this.state.infoSupermarket.NOME_S}</h2>
					<h3 className="street-detail color-detail magin-weight-detail">{this.state.infoSupermarket.RUA_S}</h3>
					<h3 className="neighborhood-detail magin-weight-detail">{this.state.infoSupermarket.BAIRRO_S}</h3>
					<h3 className="city-detail color-detail magin-weight-detail">{this.state.infoSupermarket.CIDADE_S}</h3>
				</div>
			</div>
		);

	}
}
export default SupermarketDetail;