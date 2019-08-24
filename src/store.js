import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'

const reducer = combineReducers({
    users: usersReducer,
    currentUser: currentUser
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancer(applyMiddleware(thunk)));
  
export default store