import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export default class Button extends Component {
	renderSubmit = (value) => {
		return value === 'english' ? 'Submit' : 'Voorleggen';
	};

	render() {
		return (
			// Use Consumer when pulling from multiple context object
			<ColorContext.Consumer>
				{(color) => (
					<button className={`ui button ${color}`}>
						<LanguageContext.Consumer>
							{({ language }) => this.renderSubmit(language)}
						</LanguageContext.Consumer>
					</button>
				)}
			</ColorContext.Consumer>
		);
	}
}
