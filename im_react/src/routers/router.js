import React, { Component, Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "@pages/login";
import CardId from "@pages/cardId";

export default class IMRouters extends Component {
    constructor(){
        super()
    }
    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/cardId/:id?" component={CardId} />
                    </Switch>
                </BrowserRouter>
        );
    }
}
