import React, { useState, useCallback } from "react";
import { HamburgerArrow } from "react-animated-burgers";
import { Transition } from "react-transition-group";
import "../style/styleHamburger.css";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { logoutUser } from "../redux/reducers/authReducer";

const Hamburger = (props) => {
  const [isActive, setIsActive] = useState(false);
  const toggleButton = useCallback(() => setIsActive((pre) => !pre));
  return (
    <nav className="hamburger-container">
      <Transition timeout={2000} in={isActive} appear>
        {(status) => (
          <ul className="h-ul" className={`box box-${status}`}>
            <li className="h-li">
              <Link className="h-text" to="/dash">
                Home
              </Link>
            </li>
            <li className="h-li">
              <Link className="h-text" to="/profile">
                Profile
              </Link>
            </li>
            <li className="h-li">
              <Link className="h-text" to="/add">
                Add Plant
              </Link>
            </li>
            <li className="h-li">
              <Link className="h-text" to="/" onClick={props.logoutUser}>
                Log Out
              </Link>
            </li>
          </ul>
        )}
      </Transition>
      <HamburgerArrow {...{ isActive, toggleButton }} />
    </nav>
  );
};
const mapStateToProps = (state) => state;
export default withRouter(connect(mapStateToProps, { logoutUser })(Hamburger));
