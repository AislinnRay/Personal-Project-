import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser, logoutUser } from "../redux/reducers/authReducer";
import '../style/stylePro.css';

class HooksProfile extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      phone: "",
      first_name: "",
      last_name: "",
      profile_pic: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    this.setState({
      first_name: this.props.user.first_name || "",
      last_name: this.props.user.last_name || "",
      profile_pic: this.props.user.profile_pic || "",
      email: this.props.user.email || "",
      password: this.props.user.password || "",
      phone: this.props.user.phone || "",
    });
    console.log(this.props);
  }
  update = async (e) => {
    e.preventDefault();
    const {
      email,
      password,
      phone,
      first_name,
      last_name,
      profile_pic,
    } = this.state;
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
        this.props.setUser(res.data);
        this.props.history.push("/dash");
      })
      .catch((err) => {
        alert("Could not update user information");
      });
  };
  logout = () => {
    axios.delete("/auth/logout").then(() => {
      this.props.logoutUser();
      this.props.history.push("/");
    });
  };
  render() {
    const {
      email,
      password,
      phone,
      first_name,
      last_name,
      profile_pic,
    } = this.state;
    return (
      <div className="profile-container">
        <div>
          <img
            className="profile-picture"
            src={profile_pic}
            alt="Profile"
          />

          <form onSubmit={(e) => this.update(e)}>
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              value={first_name}
              onChange={(e) => this.changeHandler(e)}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={last_name}
              onChange={(e) => this.changeHandler(e)}
            />
            <input
              type="text"
              placeholder="Profile Picture"
              name="profile_pic"
              value={profile_pic}
              onChange={(e) => this.changeHandler(e)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => this.changeHandler(e)}
            />
            <input
              type="text"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => this.changeHandler(e)}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => this.changeHandler(e)}
            />
            <input type="submit" value="update" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState.authReducer;
const mapDispatchToProps = { setUser, logoutUser };
export default connect(mapStateToProps, mapDispatchToProps)(HooksProfile);