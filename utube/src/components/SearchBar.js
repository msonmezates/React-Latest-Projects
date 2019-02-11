import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

export default class SearchBar extends Component {

  state = {
    term: ''
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  }

  // invoke callback to pass data from SearchBar to App (child to parent)
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="search-bar">
        <label className="search-bar-label">Video Search</label>
        <input
          className="search-bar-input-box"
          type="text"
          onChange={this.onInputChange}
          value={this.state.term}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  onTermSubmit: PropTypes.func
};