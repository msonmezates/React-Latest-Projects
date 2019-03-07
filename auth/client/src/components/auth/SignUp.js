import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../../actions';

class SignUp extends Component {
	onSubmit = (formValues) => {
		this.props.signup(formValues);
	};

	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<label htmlFor="email">Email</label>
					<Field name="email" type="email" component="input" autoComplete="none" />
				</fieldset>
				<fieldset>
					<label htmlFor="password">Password</label>
					<Field name="password" type="password" component="input" autoComplete="none" />
				</fieldset>
				<button>Sign Up!</button>
			</form>
		);
	}
}

// Using compose, we can use mutiple HOCs easily
export default compose(connect(null, actions), reduxForm({ form: 'signup' }))(SignUp);
