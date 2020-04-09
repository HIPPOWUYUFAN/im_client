import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "@pages/Login";
import SignIn from "@pages/Login/SignIn";
import SignUp from "@pages/Login/SignUp";

import Home from "@pages/Home";

// 子页面
import Toobar from '@pages/Toobar'

export function MainRouter() {

    return (
        <Router>
            <Switch>
                <Route path="/" component={Login} />
                <Route path="/home" component={Home} />
            </Switch>
        </Router>
    );
}


// 主页面子路由
export function LoginRouter() {

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route exact path='/login/signup' component={SignUp} />
            </Switch>
        </Router>

    )
}

// 主页面子路由
export function HomeRouter() {

    return (
        <Router>
            <Switch>
                <Route exact path='/home/toobar' component={Toobar} />
            </Switch>
        </Router>

    )
}