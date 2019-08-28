import React from 'react';
import {Link , NavLink} from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <ul>
                <li> <NavLink exact to="/" > Home</NavLink></li>
                <li> <NavLink to="/about" > About</NavLink> </li>
            </ul>
        </div>
    )
}
export default Nav ;