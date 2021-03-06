import React from 'react';
import PropTypes from 'prop-types';

import '../css/SeasonDisplay.css';

const seasonConfig = {
	summer: {
		text: "It's summer time",
		iconName: 'sun'
	},
	winter: {
		text: "It's winter time!",
		iconName: 'snowflake'
	}
};

// Get the current season based on latitude, month and northern/southern hemisphere
const getSeason = (lat, month) => {
	// northern hemisphere
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		// southern hemisphere
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName } = seasonConfig[season];

	return (
		<div className={`seasonDisplay ${season}`}>
			<i className={`${iconName} massive icon iconLeft`} />
			<h1 className="text">{text}</h1>
			<i className={`${iconName} massive icon iconRight`} />
		</div>
	);
};

SeasonDisplay.propTypes = {
	lat: PropTypes.number
};

export default SeasonDisplay;
