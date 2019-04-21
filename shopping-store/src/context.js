import React, { Component } from 'react';

import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Context always comes with Provider and Consumer

class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct,
		cart: [],
		modalOpen: false,
		modalProduct: detailProduct,
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0
	};

	componentDidMount() {
		this.setProducts();
	}

	setProducts = () => {
		let tempProducts = [];
		storeProducts.forEach((item) => {
			const singleItem = { ...item };
			tempProducts = [ ...tempProducts, singleItem ];
		});

		this.setState(() => {
			return {
				products: tempProducts
			};
		});
	};

	getItem = (id) => {
		const product = this.state.products.find((item) => item.id === id);
		return product;
	};

	handleDetail = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return {
				detailProduct: product
			};
		});
	};

	addToCart = (id) => {
		const tempProducts = [ ...this.state.products ];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		// Change product's values
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;

		this.setState(
			() => {
				return {
					products: tempProducts,
					cart: [ ...this.state.cart, product ]
				};
			},
			() => this.addTotals()
		);
	};

	openModal = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return {
				modalProduct: product,
				modalOpen: true
			};
		});
	};

	closeModal = () => {
		this.setState(() => {
			return {
				modalOpen: false
			};
		});
	};

	increment = (id) => {
		console.log('increment method');
	};

	decrement = (id) => {
		console.log('decrement method');
	};

	removeItem = (id) => {
		const tempProducts = [ ...this.state.products ];
		let tempCart = [ ...this.state.cart ];
		// remove the item from cart
		tempCart = tempCart.filter((item) => item.id !== id);
		// remove the item from products
		const index = tempProducts.indexOf(this.getItem(id));
		const itemToBeRemoved = tempProducts[index];
		// Change product's values
		itemToBeRemoved.inCart = false;
		itemToBeRemoved.count = 0;
		itemToBeRemoved.total = 0;

		this.setState(
			() => {
				return {
					cart: [ ...tempCart ],
					products: [ ...tempProducts ]
				};
			},
			() => {
				this.addTotals();
			}
		);
	};

	clearCart = () => {
		this.setState(
			() => {
				return {
					cart: []
				};
			},
			() => {
				this.setProducts();
				this.addTotals();
			}
		);
	};

	addTotals = () => {
		let subTotal = 0;
		this.state.cart.map((item) => (subTotal += item.total));
		const tempTax = subTotal * 0.1;
		const tax = parseFloat(tempTax.toFixed(2));
		const total = subTotal + tax;

		this.setState(() => {
			return {
				cartSubTotal: subTotal,
				cartTax: tax,
				cartTotal: total
			};
		});
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart,
					openModal: this.openModal,
					closeModal: this.closeModal,
					increment: this.increment,
					decrement: this.decrement,
					removeItem: this.removeItem,
					clearCart: this.clearCart
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
