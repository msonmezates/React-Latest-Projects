import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('action creator saveComment', () => {
	it('has action type of SAVE_COMMENT', () => {
		const action = saveComment();
		expect(action.type).toEqual(SAVE_COMMENT);
	});

	it('has the correct payload', () => {
		const action = saveComment('newComment');
		expect(action.payload).toEqual('newComment');
	});
});
