import React, { Component } from 'react';

class GoogleAuth extends Component {
	componentDidMount() {
		window.gapi.load('client:auth2', async () => {
			await window.gapi.client.init({
				clientId: '362214864240-u70jblp6vsb1pi50p2nsujt92qnvjt1t.apps.googleusercontent.com',
				scope: 'email'
			});
		});
	}

	render() {
		return <div>GoogleAuth</div>;
	}
}

export default GoogleAuth;
