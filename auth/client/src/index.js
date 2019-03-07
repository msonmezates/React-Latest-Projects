import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';
import Feature from './components/Feature';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Route path="/" exact component={Welcome} />
				<Route path="/signup" component={SignUp} />
				<Route path="/feature" component={Feature} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
