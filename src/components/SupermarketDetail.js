import React, { Component } from 'react';
import NavBar from './NavBar';
import Image from '../images/extra-frente.jpg';
import '../css/supermarketdetail.css';
const axios = require("axios");

class SupermarketDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			supermarkets: []
		};
	}

	componentWillMount() {

		axios.get("http://localhost:3001/supermercado").then(res => {
			this.setState({
				supermarkets: res.data
			});

		});

	}



	render() {
		debugger
		var s = this.state.supermarkets.filter(s => s.ID_S === this.props.supermarketSelected)[0];
		console.log(this.state.supermarkets,s)
	
			return (
				<div>
					<NavBar type={2} />
					<div className="containerDetail">
						<div className="image-border">
							<img src={Image} alt="Detalhe" className="detail"></img>
						</div>
						<h2 className="name-supermarket-detail color-detail">teste</h2>
						<h3 className="street-detail color-detail magin-weight-detail">R. Maria Cinto de Biagi, 164</h3>
						<h3 className="neighborhood-detail magin-weight-detail">Jardim Santa Rosália</h3>
						<h3 className="city-detail color-detail magin-weight-detail">Sorocaba - SP, 18090-000</h3>
					</div>
				</div>
			);

	}
}
export default SupermarketDetail;