import { SET_USER, SET_USER_LOADING, SET_USER_ERROR } from '../actions/userActions';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, data: action.payload };
    case SET_USER_LOADING:
      return { ...state, loading: action.payload };
    case SET_USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;