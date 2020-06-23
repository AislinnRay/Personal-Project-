import React from 'react';
import {Link} from 'react-router-dom';

const Header = props => {
    return (
        <nav>
                <h1>Plantsiful</h1>
            <div>
                <Link to="/dash">Dashboard</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
    )
}
export default Header;