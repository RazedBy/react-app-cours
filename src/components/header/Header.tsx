import React from 'react';

import './header.css';

function Header(){
    return (
        <div className='header'>
            <div className="left">
                <h3>Météday</h3>
            </div>
            <div className="right">
                <ul>
                    <li>Home</li>
                    <li>Details</li>
                    <li>About us</li>
                </ul>
            </div>
        </div>
    )
}

export default Header