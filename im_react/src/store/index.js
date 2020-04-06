import { createStore } from 'redux';

import reducer from '@store/reducers'


let store = createStore(reducer)
export default store;