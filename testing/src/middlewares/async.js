// Our own middleware that makes async calls

export default ({ dispatch }) => (next) => (action) => {
	if (!action.payload || !action.payload.then) {
		return next(action);
	}
	//wait for the promise to resolve , create a new action and dispatch
	action.payload.then((response) => {
		const newAction = { ...action, payload: response };
		dispatch(newAction);
	});
};
