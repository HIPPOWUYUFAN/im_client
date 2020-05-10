import { combineReducers } from 'redux'
import { userInfo, chatInfo } from '@store/states'


function getUserInfo(state = userInfo, action) {
    switch (action.type) {
        case 'setUserInfo':
            state = action.data
            console.log(state)
            return state
        default:
            return state
    }
}




function getChatInfo(state = chatInfo, action) {
    switch (action.type) {
        case 'setTabs':
            state = {
                ...state,
                tabs: action.data
            }
            console.log(state)
            return state

        case 'setChating':
            state = {
                ...state,
                chating: action.data
            }
            console.log(state)
            return state

        case 'setChatMessage':
            state.chats[action.data.name] = [
                ...state.chats[action.data.name],
                action.data.content
            ]
            state = {
                ...state,
                chats: { ...state.chats}
            }
            return state

        default:
            return state
    }
}


export default combineReducers({ getUserInfo, getChatInfo });