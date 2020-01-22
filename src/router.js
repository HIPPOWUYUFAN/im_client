import React from 'react';

import {
    Route,
    Switch
} from 'react-router-dom';

// 引入页面
import CardId from 'pages/cardId';
import Container from 'pages/container';
// 路由
const getRouter = () => (
    <Switch>
            <Route exact path="/" component={Container} />
            <Route exact path="/cardId/:id?" component={CardId} />
    </Switch>
);

export default getRouter;
