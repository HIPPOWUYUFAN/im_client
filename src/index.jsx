import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { MainRouter } from '@routers'
import { Provider } from 'react-redux';
import store from '@store';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@assets/theme'
import { withRouter } from 'react-router';
import { SimpleBackdrop, SimpleAlerts } from '@services/componentBase'
import { SnackbarProvider, useSnackbar } from 'notistack';

console.log(theme)
function isPc() {
    var userAgentInfo = navigator.userAgent;
    console.log(userAgentInfo)
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
ReactDom.render(

    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={5} anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}>
                <MainRouter />
            </SnackbarProvider>
        </ThemeProvider>
    </Provider>

    , document.getElementById('app')
)

