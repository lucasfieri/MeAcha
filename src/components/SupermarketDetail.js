import React, { Component } from 'react';
import SecondNav from './SecondNav';
import Image from '../images/extra-frente.jpg';
import '../css/supermarketdetail.css';

class SupermarketDetail extends Component {

	render() {
		return (
			<div>
				<SecondNav />
				<div className="containerDetail">
					<div className="image-border">
						<img src={Image} alt="Detalhe" className="detail"></img>
					</div>
					<h2 className="name-supermarket-detail color-detail">EXTRA</h2>
					<h3 className="street-detail color-detail magin-weight-detail">R. Maria Cinto de Biagi, 164</h3>
					<h3 className="neighborhood-detail magin-weight-detail">Jardim Santa Rosália</h3>
					<h3 className="city-detail color-detail magin-weight-detail">Sorocaba - SP, 18090-000</h3>
				</div>
			</div>

		);
	}
}
export default SupermarketDetail;