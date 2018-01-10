import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import {applyMiddleware} from 'redux';
import {createStore} from 'redux';

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));