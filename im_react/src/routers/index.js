import React, { PureComponent } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "@pages/login";

export default class IMRouters extends PureComponent {
  
    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login} />
                    </Switch>
                </BrowserRouter>
        );
    }
}
