import React from 'react';
import { connect } from 'react-redux'
import { chatAction } from '@store/actions'
import { getLocalStorage } from '@services/public'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { trim } from '@services/public'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        '& .MuiTextField-root': {
            width: '100%',
            height: "100%"
        },
        '& .MuiOutlinedInput-multiline': {
            height: "100%",
            width: '100%',
        },
        '& .MuiInputBase-root': {
            alignItems: 'flex-start'
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 0
        },
        '& .MuiOutlinedInput-inputMultiline': {
            height: '100% !important',
            overflow: 'auto !important'
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px 0 0 0',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px 0 0 0',
            outline: 0,
        },
    },
}));

function ChatInput(props) {
    const classes = useStyles()
    const { chating, setChatMessage } = props
    // const setChatMessage = chatAction.setChatMessage
    console.log(props.dispatch)
    const username = getLocalStorage('_token')['user_name']

    let command = false
    async function keyDown(e) {
        if (e.keyCode == 91) { command = true }
        if ((e.ctrlKey && e.keyCode == 13) || (command && e.keyCode == 13)) {
            console.log('组合')
            e.preventDefault();
            e.stopPropagation();
            e.cancelBubble = false;
            e.target.value = e.target.value + '\n'
        }
        if (!e.ctrlKey && e.keyCode == 13 && !command) {
            console.log(trim(e.target.value))
            const content = trim(e.target.value)
            event.cancelBubble = true;
            event.preventDefault();
            event.stopPropagation();
            if (content) {
                setChatMessage(
                    {
                        name: chating,
                        content: {
                            name: username,
                            message: content
                        }
                    }
                ).then(r => {
                    props.emit(true)
                    event.target.value = null
                })
            }
        }
    }
    return (
        <div className={classes.root}>
            <TextField
                id="outlined-multiline-static"
                multiline
                variant="outlined"
                onKeyDown={(event) => { keyDown(event) }}
                onKeyUp={(event) => { if (event.keyCode == 91) { command = false } }}
            />
        </div>
    )

}


function select(state) {
    return {
        chating: state.getChatInfo.chating,
    }
}
export default connect(select, chatAction)(ChatInput)