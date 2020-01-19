import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import getRouter from './router';
import { Provider } from 'react-redux';
import stores from './redux/store';

ReactDom.render(
    <Provider store={stores.store}>
        <Router>
            {getRouter()}
        </Router>
    </Provider>,
    document.getElementById('app')
)

