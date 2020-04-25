import React from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import { getLocalStorage } from '@services/public'
import SignIn from "@pages/Login/SignIn";
import SignUp from "@pages/Login/SignUp";
import Home from "@pages/Home";

// 子页面
import Toobar from '@pages/Toobar'

export function MainRouter() {
    console.log(getLocalStorage('_token'))
    return (
        <Router>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
                <Redirect to={getLocalStorage('_token') ? '/home' : '/signin'} />
            </Switch>
        </Router>
    );
}


// // 主页面子路由
// export function LoginRouter() {

//     return (
//         <Router>
//             <Switch>
//                 <Route exact path='/login' render={(props) => <SignIn></SignIn>} />
//                 <Route exact path='/login/signup' component={SignUp} />
//             </Switch>
//         </Router>

//     )
// }

// 主页面子路由
export function HomeRouter() {

    return (
        <Router>
            <Switch>
                <Route exact path='/home/toobar' component={Toobar} />
                <Redirect to="/home/toobar" />
            </Switch>
        </Router>

    )
}