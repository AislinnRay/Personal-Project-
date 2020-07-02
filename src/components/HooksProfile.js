import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser, logoutUser } from "../redux/reducers/authReducer";
import "../style/stylePro.css";
import {TextField, Button} from '@material-ui/core'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HooksProfile(props) {
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState(props.user.password);
  const [phone, setPhone] = useState(props.user.pone);
  const [first_name, setFirstName] = useState(props.user.first_name);
  const [last_name, setLastName] = useState(props.user.last_name);
  const [profile_pic, setProfilePic] = useState(props.user.profile_pic);

  const update = async (e) => {
    e.preventDefault();
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
        toast.success("Profile has been successful updated", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        props.setUser(res.data);
        //props.history.push("/dash");
      })
      .catch((err) => {
        alert("Could not update user information");
      });
  };

  return (
    <div className="profile-container">
      <div className="banner-box"></div>
      <div className="profile-pic-form-container">
        <img
          className="profile-picture"
          src={props.user.profile_pic}
          alt="Profile"
        />
        <p className="profile-name">{props.user.first_name} {props.user.last_name}</p>

        <form className="profile-form-container" onSubmit={(e) => update(e)}>
          <TextField
            type="text"
            placeholder="First Name"
            name="first_name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            type="text"
            placeholder="Profile Picture"
            name="profile_pic"
            value={profile_pic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
          <TextField
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
          <br/>
          <Button variant="outlined" type="submit" value="update">Update</Button>
        </form>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState.authReducer;
const mapDispatchToProps = { setUser, logoutUser };
export default connect(mapStateToProps, mapDispatchToProps)(HooksProfile);
