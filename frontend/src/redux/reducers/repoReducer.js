import { SET_REPOS, SET_REPOS_LOADING, SET_REPOS_ERROR, SET_SELECTED_REPO } from '../actions/repoActions';


//initial state for repo reducers
const initialState = {
  list: [],
  loading: false,
  error: null,
  selectedRepo: null,
};

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOS:
      return { ...state, list: action.payload };
    case SET_REPOS_LOADING:
      return { ...state, loading: action.payload };
    case SET_REPOS_ERROR:
      return { ...state, error: action.payload };
    case SET_SELECTED_REPO:
      return { ...state, selectedRepo: action.payload };
    default:
      return state;
  }
};

export default repoReducer;