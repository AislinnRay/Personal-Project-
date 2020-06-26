import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import plantReducer from './reducers/plantReducer';
import promiseMiddleware from 'redux-promise-middleware';


const rootReducer = combineReducers({authReducer, plantReducer})
export default createStore(rootReducer, applyMiddleware(promiseMiddleware))