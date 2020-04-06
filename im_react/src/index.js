import React from 'react';
import ReactDom from 'react-dom';
import IMRouters from '@routers'
import { Provider } from 'react-redux';
import store from '@store';
// import { ThemeProvider } from '@material-ui/core/styles';


// const theme = {};
ReactDom.render(
    <Provider store={store}>
        {/* <ThemeProvider theme={theme}> */}
            <IMRouters />
        {/* </ThemeProvider> */}
    </Provider>
    , document.getElementById('app')
)

