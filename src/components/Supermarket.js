import React, { Component } from 'react';
import NavBar from './NavBar';
import BtnNext from '../images/icons/btn-next.png';
import BtnSpeaker from '../images/icons/btn-speaker.png'
import '../css/supermarket.css';
import { Link } from "@reach/router";
const axios = require("axios");


class Supermarket extends Component {

	constructor(props) {
		super(props);
		this.state = {
			supermarkets: [],
		};
	}

	
	componentWillMount() {
		axios.get("http://192.168.0.20:3001/supermercado").then(res => {
			this.setState({ supermarkets: res.data })
		});
	}

	render() {
		return (
			<div>
				<NavBar type={1} />
				<ul className="list-supermarket">
					{this.state.supermarkets.map((supermarket, index) => (
						<li className="item-list-supermarket" key={index}>
							<Link to={"Splash/Detail/"+ supermarket.ID_S} >
								<button className="btn-supermarket-information"  >
									<img src={require(`../images/${supermarket.IMAGEM_S}`)} className="img-supermarket" alt={"Imagem do "+ Supermarket.NOME_S} />
								</button>
							</Link>
							<p className="supermarket-name">{supermarket.NOME_S}</p>
							<div className="buttons">
								<img src={BtnSpeaker} className="button-volume" alt="Ícone de autofalante"></img>
								<div className="box-arrow">
								<Link to={"Splash/Search/"+ supermarket.ID_S} >
									<button className="btn-supermarket-information btn-next">
										<img src={BtnNext} className="button-arrow" alt="Ícone para avançar"></img>
								</button>
								</Link>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Supermarket;
