import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

describe('CommentList component', () => {
	let wrapped;

	beforeEach(() => {
		const initialState = {
			comments: [ 'Comment 1', 'Comment 2' ]
		};

		// make sure it's connected to redux store
		wrapped = mount(
			<Root initialState={initialState}>
				<CommentList />
			</Root>
		);
	});

	afterEach(() => {
		// unmount component after each test run
		wrapped.unmount();
	});

	it('creates one LI per comment', () => {
		expect(wrapped.find('li').length).toEqual(2);
	});

	it('shows the text for each comment', () => {
		expect(wrapped.render().text()).toContain('Comment 1');
		expect(wrapped.render().text()).toContain('Comment 2');
	});
});
