import React from 'react';
import "./NavBar.css"
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        < nav>
            <ul >
                <li>
                    <Link to="/about">A</Link>
                </li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
        </ul>
    </nav >
    );
}