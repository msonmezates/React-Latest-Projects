import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
	state = {
		term: ''
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="search">Image Search</label>
						<input
							type="text"
							id="search"
							onChange={e => this.setState({ term: e.target.value })}
							value={this.state.term}
						/>
					</div>
				</form>
			</div>
		);
	}
}

SearchBar.propTypes = {
	onSubmit: PropTypes.func
}

export default SearchBar;