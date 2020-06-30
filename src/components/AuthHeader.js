import React from 'react';
import "../style/styleHeader.css";
import {Link} from 'react-router-dom';

const AuthHeader = () => {
    return (
        <div>
      <h1>Plantsiful</h1>
      <span className="header-container">
        <div>
          <nav role="navigation" className="primary-navigation">
            <ul>
              <li>
                <a href="#/dash">Home</a>
              </li>
              <li>
                <a href="#">Plants 101</a>
                <ul className="dropdown">
                  <li>
                    <a href="#">Tips & Tricks</a>
                  </li>
                  <li>
                    <a href="#">Picking the Perfect Plant</a>
                  </li>
                  <li>
                    <a href="#">Just Because</a>
                  </li>
                  <li>
                    <a href="#">Blogs and Resources</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
          {/* <Link to="/dash">Dashboard</Link>
        <Link to="/profile">Profile</Link> */}
        </div>
      </span>
    </div>
    )
}

export default AuthHeader;