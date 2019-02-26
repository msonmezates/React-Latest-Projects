import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

describe('CommentBox component', () => {
	let wrapped;

	beforeEach(() => {
		// make sure it's connected to redux store
		wrapped = mount(
			<Root>
				<CommentBox />
			</Root>
		);
	});

	afterEach(() => {
		wrapped.unmount(); // unmount the component after each test run
	});

	it('has a text area and a button', () => {
		expect(wrapped.find('textarea').length).toEqual(1);
		expect(wrapped.find('button')).toHaveLength(1);
	});

	describe('the text area', () => {
		beforeEach(() => {
			wrapped.find('textarea').simulate('change', {
				target: { value: 'new comment' }
			});
			// we need to force an update so that component can re-render
			wrapped.update();
		});

		it('user can type in', () => {
			expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
		});

		it('should get emptied when the input is submitted', () => {
			wrapped.find('form').simulate('submit');
			wrapped.update();
			expect(wrapped.find('textarea').prop('value')).toEqual('');
		});
	});
});
