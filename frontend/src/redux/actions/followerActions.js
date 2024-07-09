//fetching from api folder and dispatching followers action

import { fetchUserFollowers } from '../../api/github';

export const SET_FOLLOWERS = 'SET_FOLLOWERS';
export const SET_FOLLOWERS_LOADING = 'SET_FOLLOWERS_LOADING';
export const SET_FOLLOWERS_ERROR = 'SET_FOLLOWERS_ERROR';

export const setFollowers = (followers) => ({ type: SET_FOLLOWERS, payload: followers });
export const setFollowersLoading = (isLoading) => ({ type: SET_FOLLOWERS_LOADING, payload: isLoading });
export const setFollowersError = (error) => ({ type: SET_FOLLOWERS_ERROR, payload: error });

export const fetchFollowers = (username) => async (dispatch) => {
  dispatch(setFollowersLoading(true));
  try {
    const followers = await fetchUserFollowers(username);
    dispatch(setFollowers(followers));
  } catch (error) {
    dispatch(setFollowersError(error.message));
  } finally {
    dispatch(setFollowersLoading(false));
  }
};