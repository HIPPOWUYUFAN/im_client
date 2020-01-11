import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <ul>
                <li><Link to="/">12312</Link></li>
                <li><Link to="/page">Pages</Link></li>
                <li><Link to="/counter">Counter12321312312</Link></li>
            </ul>
        </div>
    )
}