import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { isMainThread } from 'worker_threads';

describe('App component', () => {
	it('shows a comment box', () => {
		const wrapped = shallow(<App />);
		expect(wrapped.find(CommentBox).length).toEqual(1);
	});

	it('shows a comment list', () => {
		const wrapped = shallow(<App />);
		expect(wrapped.find(CommentList)).toHaveLength(1);
	});
});
