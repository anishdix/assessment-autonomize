import { SET_FOLLOWERS, SET_FOLLOWERS_LOADING, SET_FOLLOWERS_ERROR } from '../actions/followerActions';


//initial state for followers
const initialState = {
  list: [],
  loading: false,
  error: null,
};

const followerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOLLOWERS:
      return { ...state, list: action.payload };
    case SET_FOLLOWERS_LOADING:
      return { ...state, loading: action.payload };
    case SET_FOLLOWERS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default followerReducer;