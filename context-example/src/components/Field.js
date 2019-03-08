import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

export default class UserCreate extends Component {
	static contextType = LanguageContext;

	render() {
		// Use this.context when using a single context object
		const text = this.context === 'english' ? 'Name' : 'Naam';

		return (
			<div className="ui field">
				<label>{text}</label>
				<input type="text" />
			</div>
		);
	}
}
