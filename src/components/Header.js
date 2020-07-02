import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../style/styleHeader.css";
import Hamburger from "./Hamburger";

const Header = (props) => {
  const [profile_pic, setProfilePic] = useState(props.user.profile_pic);

  return (
    <div>
      <h1>Plantsiful</h1>
      <span className="header-container">
        <Hamburger />
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
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Link to="/profile">
        <img
          className="header-profile-pic"
          src={props.user.profile_pic}
          alt="profile"/></Link>
      </span>
    </div>
  );
};
// export default Header;
const mapStateToProps = (reduxState) => reduxState.authReducer;
export default connect(mapStateToProps)(Header);
