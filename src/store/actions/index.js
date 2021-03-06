import { Dispatch } from "redux";


class UserAction { }
class ChatAction { }

UserAction.prototype.setUserInfo = function (e) {
    return { type: "setUserInfo", data: e }
}
ChatAction.prototype.setTabs = function (e) {
    return { type: 'setTabs', data: e }
}

ChatAction.prototype.setChating = (e) => dispatch => {
    dispatch({ type: 'setChating', data: e })
    return Promise.resolve()
}

ChatAction.prototype.setChatMessage = (e) => dispatch => {
    dispatch({ type: 'setChatMessage', data: e })
    return Promise.resolve()
}
ChatAction.prototype.setChats = (e) => dispatch => {
    dispatch({ type: 'setChats', data: e })
    return Promise.resolve()
}

ChatAction.prototype.setChatListAdd = (e) => dispatch => {
    dispatch({ type: 'setChatListAdd', data: e })
    return Promise.resolve()
}
ChatAction.prototype.setChatListDel = (e) => dispatch => {
    dispatch({ type: 'setChatListDel', data: e })
    return Promise.resolve()
}
ChatAction.prototype.setChatList = (e) => dispatch => {
    dispatch({ type: 'setChatList', data: e })
    return Promise.resolve()
}


export const userAction = new UserAction()
export const chatAction = new ChatAction()
