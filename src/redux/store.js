import { createStore, applyMiddleware } from 'redux';
import authReducer from './reducers/authReducer';
import plantReducer from './reducers/plantReducer'
import promiseMiddleware from 'redux-promise-middleware'

const reducer = authReducer;plantReducer;
export default createStore(reducer, applyMiddleware(promiseMiddleware))