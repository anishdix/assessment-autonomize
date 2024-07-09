import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import repoReducer from './reducers/repoReducer';
import followerReducer from './reducers/followerReducer';


//main store,combning all there reducers
const rootReducer = combineReducers({
  user: userReducer,
  repos: repoReducer,
  followers: followerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;