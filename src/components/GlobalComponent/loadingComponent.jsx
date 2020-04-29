import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactDOM from 'react-dom';
import '@assets/css/global.css'

class loading extends Component {
    render() {
        return (
            <Backdrop open={true} >
                <CircularProgress color="primary" />
            </Backdrop>
        )
    }
}

loading.prototype.open = function () {
    let props = {};
    let div = document.createElement('div');
    let divId = document.createAttribute("id");
    divId.value = 'loading'
    div.setAttributeNode(divId)
    document.body.appendChild(div);
    ReactDOM.render(React.createElement(loading, props), div);
}
loading.prototype.close = function () {
    ReactDOM.unmountComponentAtNode(document.getElementById('loading'));
    document.body.removeChild(document.getElementById('loading'));
}
// loading.bind(newInstance)
let loadings = new loading()
export default loadings;