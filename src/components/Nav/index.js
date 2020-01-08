import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page">Page</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>
        </div>
    )
}