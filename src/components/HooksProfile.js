import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser, logoutUser } from "../redux/reducers/authReducer";
import "../style/stylePro.css";
import {TextField, Button} from '@material-ui/core'

function HooksProfile(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    phone: "",
    first_name: "",
    last_name: "",
    profile_pic: "",
  });

  const changeHandler = (e) => {
    setState({...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setState({
      first_name: props.user.first_name || "",
      last_name: props.user.last_name || "",
      profile_pic: props.user.profile_pic || "",
      email: props.user.email || "",
      password: props.user.password || "",
      phone: props.user.phone || "",
    })
  }, [props.user])

  const update = async (e) => {
    e.preventDefault();
    const {
      email,
      password,
      phone,
      first_name,
      last_name,
      profile_pic,
    } = state;
    await axios
      .put("/auth/user", {
        email,
        password,
        phone,
        first_name,
        last_name,
        profile_pic,
      })
      .then((res) => {
        props.setUser(res.data);
        props.history.push("/dash");
      })
      .catch((err) => {
        alert("Could not update user information");
      });
  };
  const logout = () => {
    axios.delete("/auth/logout").then(() => {
      props.logoutUser();
      props.history.push("/");
    });
  };

  return (
    <div className="profile-container">
      <div>
        <img
          className="profile-picture"
          src={props.user.profile_pic}
          alt="Profile"
        />

        <form className="profile-form-container" onSubmit={(e) => update(e)}>
          <TextField
            type="text"
            placeholder="First Name"
            name="first_name"
            value={props.user.first_name}
            onChange={(e) => changeHandler(e)}
          />
          <TextField
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={props.user.last_name}
            onChange={(e) => changeHandler(e)}
          />
          <TextField
            type="text"
            placeholder="Profile Picture"
            name="profile_pic"
            value={props.user.profile_pic}
            onChange={(e) => changeHandler(e)}
          />
          <TextField
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={props.user.phone}
            onChange={(e) => changeHandler(e)}
          />
          <TextField
            type="text"
            placeholder="Email"
            name="email"
            value={props.user.email}
            onChange={(e) => changeHandler(e)}
          />
          <TextField
            type="text"
            name="password"
            placeholder="Password"
            value={props.user.password}
            onChange={(e) => changeHandler(e)}
          />
          <br/>
          <br/>
          <Button variant="outlined" type="submit" value="update">Update</Button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState.authReducer;
const mapDispatchToProps = { setUser, logoutUser };
export default connect(mapStateToProps, mapDispatchToProps)(HooksProfile);
