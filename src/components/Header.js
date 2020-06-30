import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../style/styleHeader.css";
import Hamburger from "./Hamburger";

const Header = (props) => {
  const [profilePic, setProfilePic] = useState({
    profile_pic: "",
  });

  // useEffect(() => {
  //   console.log(props.user.profile_pic)
  //   setProfilePic({
  //     profile_pic: props.user.profile_pic || "",
  //   })
  // }, [props.user])

  return (
    <div>
      <h1>Plantsiful</h1>
      <span className="header-container">
        <Hamburger/>
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
        {/* <div className='header-profile-pic' 
                 style={{ backgroundImage: `url('${props.user.profile_pic}')` }}>
                 </div> */}
      </span>
    </div>
  );
};
export default Header;