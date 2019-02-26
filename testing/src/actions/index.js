import { SAVE_COMMENT } from './contants';

export const saveComment = (comment) => {
	return {
		type: SAVE_COMMENT,
		payload: comment
	};
};
