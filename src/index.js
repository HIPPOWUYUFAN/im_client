import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import getRouter from './router';
import { Provider } from 'react-redux';
import store from './redux/store';
// ReactDom.render(
//     <Router>
//         <Nav />
//         {getRouter()}
//     </Router>,
//     document.getElementById('app')
// )
ReactDom.render(
    <Provider store={store}>
        <Router>
            <Nav />
            {getRouter()}
        </Router>
    </Provider>,
    document.getElementById('app')
)

