import React from 'react';

import { Route, Switch } from 'react-router-dom';

// 引入页面
import Home from 'pages/home';

// 路由
const getRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
    </Switch>
);

export default getRouter;
