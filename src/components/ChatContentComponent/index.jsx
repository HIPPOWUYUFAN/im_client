import React from 'react';
import { Dialog_left, Dialog_right } from '@components/DialogComponent'
import { connect } from 'react-redux'
import { chatAction } from '@store/actions'
import { getLocalStorage } from '@services/public'

function ChatContent(props) {
    const { chats } = props
    const username = getLocalStorage('_token').user_name
    console.log(chats)
    return (
        <div style={{ width: '100%' }}>
            {chats && chats.length ?
                chats.map((p, i) => {
                    if (p.name == username) {
                        return <Dialog_right data={p} key={i} />
                    } else {
                        return <Dialog_left data={p} key={i} />
                    }
                }):null
            }
        </div>
    )

}


function select(state) {
    return {
        chats: state.getChatInfo.chating?state.getChatInfo.chats[state.getChatInfo.chating]:null,
    }
}
export default connect(select, chatAction, null, { forwardRef: true })(ChatContent)