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
			supermarketSelected: null
		};
	}

	
	componentWillMount() {
		axios.get("http://localhost:3001/supermercado").then(res => {
			this.setState({ supermarkets: res.data })
		});
	}

	render() {
		return (
			<div>
				<NavBar type={1} />
				<ul className="list-supermarket">
					{this.state.supermarkets.map((supermarket, index) => (
						<li key={index}>
							<Link to={"Splash/Detail/"+ supermarket.ID_S} >
								<button className="btn-supermarket-information"  >
									<img src={require(`../images/${supermarket.IMAGEM_S}`)} className="img-supermarket" alt={Supermarket.NOME_S} />
								</button>
							</Link>
							<p className="supermarket-name">{supermarket.NOME_S}</p>
							<div className="buttons">
								<img src={BtnSpeaker} className="button-volume" alt="speaker icon"></img>
								<div className="box-arrow">
								<img src={BtnNext} className="button-arrow" alt="next icon"></img>
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
