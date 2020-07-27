import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';             // Using index.js from reducers (combineReducers())
import {INITIAL_STATE} from '../constants/initialState';

const store = createStore(reducer, INITIAL_STATE, applyMiddleware(thunk));

export default store;