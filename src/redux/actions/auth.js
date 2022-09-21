import Cookies from 'js-cookie';
import authApi from '../../api/auth';
import { SET_AUTH_STATE, SET_CURRENT_USER, SET_LOADING_STATUS } from './types';

export function setAuthState(authState) {
  return {
    type: SET_AUTH_STATE,
    payload: authState,
  };
}

export function setCurrentUser(userData) {
  return {
    type: SET_CURRENT_USER,
    payload: userData,
  };
}

export const authSuccess = (response) => (dispatch) => {
  // Cookies.set('jwt', response.headers.authorization.slice(7), { expires: 2 });
  Cookies.set('token', response.headers.authorization, { expires: 2 });
  localStorage.setItem('me', JSON.stringify(response.data));
  dispatch(setCurrentUser(response.data));
  dispatch(setAuthState(true));
};

export const authFail = () => (dispatch) => {
  Cookies.remove('token');
  dispatch(setCurrentUser(null));
  dispatch(setAuthState(false));
};

export const checkAuthState = () => async (dispatch, getState) => {
  const state = getState();
  if (state.auth.isLoggedIn && state.auth.currentUser) {
    if (state.auth.isLoading) {
      dispatch({ type: SET_LOADING_STATUS, payload: false });
    }
    return;
  }
  try {
    const res = await authApi.getUserData();
    if (res.status === 200) {
      dispatch(setCurrentUser(res.data));
      dispatch(setAuthState(true));
    }
  } finally {
    dispatch({ type: SET_LOADING_STATUS, payload: false });
  }
};
