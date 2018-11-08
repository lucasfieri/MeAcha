import React, { Component } from 'react';
import NavBar from './NavBar';
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

	handleClick = (index) => {
		this.setState({supermarketSelected:index})
	}
	
	render() {
		return (
			<div>
				<NavBar type={1} />
				<ul className="list-supermarket">
					{this.state.supermarkets.map((supermarket, index) => (
						<li key={index}>
							<Link to={"Splash/Detail/"+ index} >
								<button className="btn-supermarket-information"  >
									<img src={require(`../images/${supermarket.IMAGEM_S}`)} className="img-supermarket" alt={Supermarket.NOME_S} />
								</button>
							</Link>
							<p className="supermarket-name">{supermarket.NOME_S}</p>
							<div className="buttons">
								<i className="fas fa-volume-up button-volume"></i>
								<div className="box-arrow">
									<i className="fas fa-arrow-right button-arrow"></i>
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
