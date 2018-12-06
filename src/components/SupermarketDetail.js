import React, { Component } from 'react';
import NavBar from './NavBar';
import '../css/supermarketdetail.css';
const axios = require("axios");

class SupermarketDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			supermarkets: [],
			infoSupermarket: [],
			imageSupermarket: []
		};
	}

	componentWillMount() {
		axios.get("http://192.168.0.20:3001/supermercado").then(res => {
			this.setState({
				supermarkets: res.data
			});
			const supermarket = this.state.supermarkets.filter(s => { return s.ID_S === parseInt(this.props.supermarketSelected, 10) })[0];
			this.setState({ infoSupermarket: supermarket })
			const image = [this.state.supermarkets.filter(s => { return s.ID_S === parseInt(this.props.supermarketSelected, 10) })[0]];
			this.setState({ imageSupermarket: image })
		});
	}

	render() {
		const supermarket = this.state.infoSupermarket;
		return (
			<div>
				<NavBar type={2} name={supermarket.NOME_S} />
				<div className="containerDetail">
					<div className="image-border">
						{this.state.imageSupermarket.map((supermarket1, index) => (
							<img src={require(`../images/${supermarket1.IMAGEM_S}`)} alt={"Imagem do " + supermarket.NOME_S} key={index} className="detail"></img>
						))}
					</div>
					<h2 className="name-supermarket-detail color-detail">{supermarket.NOME_S}</h2>
					<h3 className="street-detail color-detail magin-weight-detail">{supermarket.RUA_S}</h3>
					<h3 className="neighborhood-detail magin-weight-detail">{supermarket.BAIRRO_S}</h3>
					<h3 className="city-detail color-detail magin-weight-detail">{supermarket.CIDADE_S}</h3>
				</div>
			</div>
		);
	}
}

export default SupermarketDetail;