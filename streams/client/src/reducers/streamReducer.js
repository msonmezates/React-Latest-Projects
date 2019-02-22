import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      const newObj = action.payload.reduce((acc, val) => {
        acc[val.id] = val;
        return acc;
      }, {});
      return { ...state, ...newObj }
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      const newState = Object.assign({}, state);
      for (let key in newState) {
        if (key === action.payload) {
          delete newState[key];
        }
      }
      return { ...newState };
    default:
      return state;
  }
};