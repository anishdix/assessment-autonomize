//fetching from api and dispatching repo actions

import { fetchUserRepositories } from '../../api/github';

export const SET_REPOS = 'SET_REPOS';
export const SET_REPOS_LOADING = 'SET_REPOS_LOADING';
export const SET_REPOS_ERROR = 'SET_REPOS_ERROR';
export const SET_SELECTED_REPO = 'SET_SELECTED_REPO';

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos });
export const setReposLoading = (isLoading) => ({ type: SET_REPOS_LOADING, payload: isLoading });
export const setReposError = (error) => ({ type: SET_REPOS_ERROR, payload: error });
export const setSelectedRepo = (repo) => ({ type: SET_SELECTED_REPO, payload: repo });

export const fetchRepos = (username) => async (dispatch) => {
  dispatch(setReposLoading(true));
  try {
    const repos = await fetchUserRepositories(username);
    dispatch(setRepos(repos));
  } catch (error) {
    dispatch(setReposError(error.message));
  } finally {
    dispatch(setReposLoading(false));
  }
};