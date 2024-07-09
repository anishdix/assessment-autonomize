//fetching from api and dispatching user actions

import { fetchUserData } from '../../api/github';

export const SET_USER = 'SET_USER';
export const SET_USER_LOADING = 'SET_USER_LOADING';
export const SET_USER_ERROR = 'SET_USER_ERROR';

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setUserLoading = (isLoading) => ({ type: SET_USER_LOADING, payload: isLoading });
export const setUserError = (error) => ({ type: SET_USER_ERROR, payload: error });

export const fetchUser = (username) => async (dispatch) => {
  dispatch(setUserLoading(true));
  try {
    const userData = await fetchUserData(username);
    dispatch(setUser(userData));
  } catch (error) {
    dispatch(setUserError(error.message));
  } finally {
    dispatch(setUserLoading(false));
  }
};