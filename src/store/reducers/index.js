import { combineReducers } from 'redux'
import { userInfo } from '@store/states'


function userInfoState(state = userInfo, action) {
    // console.log(action)
    switch (action.type) {
        case 'setUserInfo':
            state = action.data
            console.log(state)
            return state
        default:
            return state
    }
}



export default combineReducers({ userInfoState });