import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { MainRouter } from '@routers'
import { Provider } from 'react-redux';
import store from '@store';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@assets/theme'
import { withRouter } from 'react-router';
import { SimpleBackdrop, SimpleAlerts } from '@services/componentBase'


ReactDom.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <MainRouter />
        </ThemeProvider>
    </Provider>
    , document.getElementById('app')
)

