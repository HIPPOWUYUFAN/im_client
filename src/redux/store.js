import {createStore} from 'redux';
import counter  from 'reducers/counter';
import {combineReducers} from "redux";

let store = createStore(combineReducers({counter}));
// let store = createStore(counter);

export default store;
