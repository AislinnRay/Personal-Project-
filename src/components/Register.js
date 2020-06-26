import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from '../redux/reducers/authReducer';
import '../style/styleLand.css'
import plantIcon from "../images/black+plant+png.png"

class Register extends Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    register = async (e) => {
        e.preventDefault();
        const { email, password, phone, first_name, last_name} = this.state
        await axios.post('/auth/register', {email, password, phone, first_name, last_name})
        .then( res => {
            this.props.setUser(res.data)
            this.props.history.push('/dash')})
        .catch(err => {alert('Could not register')})
    }
     render(){
         const { email, password, phone, first_name, last_name } = this.state
        return(
            <div className="land-container">
                {/* <h1>Plantsiful</h1> */}
                <div className="login-form-container" id="register-form-container">
                    <img className="avatar"
                    src={plantIcon} alt="source: https://www.juliakcrist.com/desktopicons"/>
                <form 
                className="login-form"
                onSubmit={(e) => this.register(e)}>
                    <p className="login-text">First Name</p>
                    <input 
                    className="login-input"
                    type="text" 
                    placeholder="First Name" name="first_name" 
                    value={first_name} 
                    onChange={ e => this.changeHandler(e)}/>
                    <p className="login-text">Last Name</p>
                    <input 
                    className="login-input"
                    type="text" 
                    placeholder="Last Name" name="last_name" 
                    value={last_name} 
                    onChange={ e => this.changeHandler(e)}/>
                    <p className="login-text">Phone Number</p>
                    <input type="number" placeholder="Phone Number" name="phone" value={phone} onChange={ e => this.changeHandler(e)}/>
                    <p className="login-text">Email</p>
                    <input 
                    className="login-input"
                    type="text" 
                    placeholder="email" 
                    name="email" 
                    value={email} 
                    onChange={ e => this.changeHandler(e)}/>
                    <p className="login-text">Password</p>
                    <input 
                    className="login-input"
                    type='password' placeholder="password" name="password" 
                    value={password} 
                    onChange={ e => this.changeHandler(e)}/>
                    <input 
                    className="login-input"
                    type='submit' 
                    value='register'/>
                </form>
                <div className="land-span-container">
                    <p className="land-span">Already have an account?</p>
                    <Link to='/'>Login Here</Link>
                </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => reduxState.authReducer
export default connect(mapStateToProps, {setUser})(Register)