import {createStore} from 'redux';
import counter  from 'reducers/counter';
import {combineReducers} from "redux";

class Store{}
Store.prototype.store = createStore(combineReducers({counter}));
// let store = createStore(counter);
let stores = new Store()
export default stores;
