import React, { Component } from 'react';
import UserComponent from '@components/UserComponent'



export default class SignIn extends Component {

    render() {
        return (
                <UserComponent {...this.props} type="SignIn" />
        )
    }
}