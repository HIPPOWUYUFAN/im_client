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
    open(type, content, time) {
        console.log(type)
        this.setState({
            type: type,
            content: content,
            time: time,
            status: true
        })
        console.log(this.state)
        // console.log(notices)
        this.close(time)
    }
    close(time) {

        let dispaly = setTimeout(() => {
            this.setState({
                ...this.state,
                status: false
            })
        }, time);
    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Collapse in={this.state.status || false}>
                    <Alert severity={this.state.type || 'error'}>{this.state.content || null}</Alert>
                </Collapse>
            </ThemeProvider>

        )
    }
}

function open() {
    let div = document.createElement('div');
    let divId = document.createAttribute("id");
    divId.value = 'msg'
    div.setAttributeNode(divId)
    document.body.appendChild(div);
    const ref = React.createRef()
    ReactDOM.render(<Msg ref={ref} />, div);
    return {
        addMsg(...e) {
            return ref.current.open(...e)
        },
        close() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }
    }
}
export default open();