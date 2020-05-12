import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import reducer from '@store/reducers'


let store = createStore(reducer, applyMiddleware(thunk))

// store.subscribe((e) => {
//     const state = store.getState();
//     console.log(e,state)
// })
export default store;