import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Container</Link></li>
                <li><Link to="/cardId">CardId</Link></li>
            </ul>
        </div>
    )
}