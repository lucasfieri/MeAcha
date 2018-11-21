import React, { Component } from 'react';
import NavBar from './NavBar';
import Suggestions from './Suggestions';
import '../css/search.css';
import SearchIcon from '../images/icons/btn-search.png'

const axios = require("axios");
const produtosURL = "http://localhost:3001/Results/:"
class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			supermarkets: [],
			infoSupermarket: [],
			supermarketSelected: null,
			results: [],
			query: ''
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
	getInfo = () => {
    axios.get(`${produtosURL}${this.props.supermarketSelected}/?product=${this.state.query}`).then(res => {
        this.setState({
          results: res.data                        
				}) ;
			});
	}
	handleInputChange = () => {
		this.setState({
			query: this.search.value
		}, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
	}
	render() {
		const supermarket = this.state.infoSupermarket;
		return (
			<div>
				<NavBar type={3} name={supermarket.NOME_S} street={supermarket.RUA_S} neighborhood={supermarket.BAIRRO_S} />
				<div className="container-input">
					<input type="text" placeholder="Digite o que deseja buscar" className="input-text" ref={input => this.search = input} onChange={this.handleInputChange}/>
					<Suggestions results={this.state.results} supermarketSelected={this.props.supermarketSelected}/>
					<button type="submit" className="btn-search"><img src={SearchIcon} alt="Ícone de Busca" className="img-btn-search" /></button>
				</div>
			</div>
		)
	}
}

export default SearchBar;