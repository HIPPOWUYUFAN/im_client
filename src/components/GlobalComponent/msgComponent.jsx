import React, { Component } from 'react'
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import ReactDOM from 'react-dom';
import '@assets/css/global.css'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@assets/theme'


class Msg extends Component {
    state = {
        type: 'error',
        content: '',
        time: 0,
        status: false
    }
    constructor() {
        super()
        this.transitionTime = 300
        this.state = { notices: [] }
        // this.removeNotice = this.removeNotice.bind(this)
    }
    open(type, content, duration, onClose) {
        console.log(type)
        console.log(onClose)
        this.setState({
            type: type,
            content: content,
            duration: duration,
            status: true
        })
        console.log(this.state)
        this.close(duration, onClose)
    }
    close(duration, onClose) {
        setTimeout(() => {
            this.setState({
                ...this.state,
                status: false
            })
            // onClose()
        }, duration);
    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Collapse in={this.state.status}>
                    <Alert severity={this.state.type}>{this.state.content}</Alert>
                </Collapse>
            </ThemeProvider>
        )
    }
}

function newNotices() {
    let div = document.createElement('div');
    let divId = document.createAttribute("id");
    divId.value = 'msg'
    div.setAttributeNode(divId)
    document.body.appendChild(div);
    const ref = React.createRef()
    ReactDOM.render(<Msg ref={ref} />, div);
    return {
        open(...e) {
            console.log(ref.current)
            return ref.current.open(...e, this.close)
        },
        close() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }
    }
}
const notices = newNotices()

export default {
    info(content, duration) {
        return notices.open('info', content, duration)
    },
    success(content, duration) {
        return notices.open('success', content, duration)
    },
    warning(content, duration) {
        return notices.open('warning', content, duration)
    },
    error(content, duration) {
        return notices.open('error', content, duration)
    },
}