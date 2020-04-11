import React, { Component } from 'react';
import { LoginRouter } from '@routers/'
import {Redirect,Route} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <LoginRouter />
            </div>

        )
    }
}
