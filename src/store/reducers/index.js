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
        case 'setChatList':
            state.chatList = action.data
            state = {
                ...state,
            }
            console.log(state)
            return state
        case 'setChatListAdd':
            state.chatList = [...state.chatList, action.data]
            state = {
                ...state,
            }
            console.log(state)
            return state
        case 'setChatListDel':
            state.chatList = state.chatList.filter(p => p.name != action.data.name)
            delete state.chats[action.data.name]
            if (action.data.name == state.chating) {
                state.chating = state.chatList.length ? state.chatList[0].name : null
            }
            state = {
                ...state,
            }
            console.log(state)
            return state
        case 'setChats':
            state.chats = { ...state.chats, ...action.data }
            state = {
                ...state,
            }
            console.log(state)
            return state
        case 'setChatMessage':
            let index = state.chatList.findIndex(p => p.name == action.data.name)
            if (index >= 0) {
                let arr = state.chatList.splice(index, 1)
                arr[0].lastMessage = action.data.content.message
                state.chatList = [arr[0], ...state.chatList]
            }

            state.chats[action.data.name] = [
                ...state.chats[action.data.name],
                action.data.content
            ]
            state = {
                ...state
            }
            return state

        default:
            return state
    }
}


export default combineReducers({ getUserInfo, getChatInfo });