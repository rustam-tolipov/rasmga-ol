import { SET_POSTS } from './types';
import postsApi from '../../api/posts';

export const getPosts = () => async (dispatch) => {
  const res = await postsApi.getPosts();
  dispatch({ type: SET_POSTS, payload: res.status });
};
