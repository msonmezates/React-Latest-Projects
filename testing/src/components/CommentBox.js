import React, {Component} from 'react';

class CommentBox extends Component {
	state = {
		comment: ''
	};

	handleChange = (e) => {
		this.setState({ comment: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		// TODO = Call an action creator to submit and save the comment
		this.setState({ comment: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a comment</h4>
				<textarea 
					value={this.state.comment} 
					onChange={this.handleChange}
				/>
				<div>
					<button>Submit</button>
				</div>
			</form>
		)
	}
}

export default CommentBox;

