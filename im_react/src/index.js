import React from 'react';
import ReactDom from 'react-dom';
import IMRouters from 'routers/router'
import { Provider } from 'react-redux';
import store from 'store/index';



ReactDom.render(
    <Provider store={store}>
        <IMRouters />
    </Provider>
    , document.getElementById('app')
)

