import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
import useLocation from './useLocation';

const App = () => {
	const [ lat, errorMessage ] = useLocation();

	const renderContent = () => {
		if (errorMessage && !lat) {
			return <div>Error: {errorMessage}</div>;
		} else if (lat && !errorMessage) {
			return <SeasonDisplay lat={lat} />;
		}
		return <Spinner message="Please accept location request" />;
	};

	return <div className="border red">{renderContent()}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
