import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const posts = await getState().posts;
  // Get all unique user ids 
  const uniqueIds = posts.reduce((userIds, post) => userIds.indexOf(post.userId) >= 0 ? userIds : [...userIds, post.userId], [])
  uniqueIds.map(id => dispatch(fetchUser(id)));
}

// Action creator to get list of posts
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get('/posts');

  dispatch({ type: 'FETCH_POST', payload: response.data });
};

// Action creator to get list of users
export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};