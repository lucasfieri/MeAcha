import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import '../css/reset.css';
import '../css/default.css';
const axios = require("axios");

const getSuggestions = value => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0 ? [] : this.state.itens.filter(item =>
		item.NOME_PRODUTO.toLowerCase().slice(0, inputLength) === inputValue
	);
};

const getSuggestionValue = suggestion => suggestion.NOME_PRODUTO;

const renderSuggestion = suggestion => (
	<div>
		{suggestion.NOME_PRODUTO}
	</div>
);

class SearchBar extends Component {

	componentWillMount() {
		axios.get("http://localhost:3001/produto").then(res => {
			this.setState({ itens: res.data })
		});
	}


	constructor(props) {
		super(props);
		this.state = {
			itens: [],
			value: ''
		};
	}


	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		});
	};


	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			itens: getSuggestions(value)
		});
	};

	onSuggestionsClearRequested = () => {
    this.setState({
      itens: []
    });
  };


	render() {
		const { value, itens } = this.state;
		const inputProps = {
      placeholder: 'Digite um supermarcado',
      value,
      onChange: this.onChange
		};
		
		return (
      <Autosuggest
        itens={itens}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
		)
	}
}

export default SearchBar;
