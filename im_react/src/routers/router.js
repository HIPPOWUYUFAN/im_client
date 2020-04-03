import React, { Component, Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "pages/login/index";
import CardId from "../pages/cardId/index";

export default class IMRouters extends Component {
    constructor(){
        super()
    }
    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/cardId/:id?" component={CardId} />
                    </Switch>
                </BrowserRouter>
        );
    }
}
