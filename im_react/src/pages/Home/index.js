import React, { Component } from 'react';

import { HomeRouter } from '@routers'



export default class Home extends Component {

    render() {
        return (
            <div>
                <div>Home</div>


                <HomeRouter />
            </div>
        )
    }
}