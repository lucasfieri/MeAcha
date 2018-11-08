import React, { Component } from 'react';
import '../css/reset.css';
import '../css/default.css';
import NavBar from './NavBar';

class SearchBar extends Component {

	render() {
		return (
			<NavBar type={3}></NavBar>
		)
	}
}

export default SearchBar;
