import { combineReducers } from 'redux'
import userState from '@store/states/userState'


function reducer(state = userState, action) {
    let newState = state
    switch (action.type) {
        case 'add':
            newState.title = [...newState.title,action.data]
            console.log(newState)
            return{ ...newState}
        default:
            return newState
    }
}



export default combineReducers({ reducer });