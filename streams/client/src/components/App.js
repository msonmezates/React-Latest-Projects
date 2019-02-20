import React from 'react';
import { Router, Route } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
	return (
		<div className="ui container">
			{/* Need to have Router instead of BrowserRouter to use my own history object */}
			<Router history={history}>
				<div>
					<Header />
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" component={StreamCreate} />
					<Route path="/streams/show" component={StreamShow} />
					<Route path="/streams/edit" component={StreamEdit} />
					<Route path="/streams/delete" component={StreamDelete} />
				</div>
			</Router>
		</div>
	);
};

export default App;
