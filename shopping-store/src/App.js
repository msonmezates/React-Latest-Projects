import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';

import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route path="/" exact component={ProductList} />
					<Route path="/details" component={Details} />
					<Route path="/cart" component={Cart} />
					<Route component={Default} /> {/* No path needed for default route */}
				</Switch>
				<Modal />
			</React.Fragment>
		);
	}
}

export default App;
