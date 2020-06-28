import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from '../redux/reducers/authReducer';
import '../style/styleLand.css'
import plantIcon from "../images/black+plant+png.png"

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    login = async (e) => {
        e.preventDefault();
        const { email, password } = this.state
        await axios.post('/auth/login', {email, password})
        .then( res => {
            console.log(res.data)
            this.props.setUser(res.data)
            this.props.history.push('/dash')})
        .catch(err => {alert('Could not log in')})
    }
     render(){
         const { email, password } = this.state
        return(
            <div className="outer-land-container">
            <div className="land-container">
                <div className="login-form-container">
                    <img className="avatar"
                    src={plantIcon} alt="source: https://www.juliakcrist.com/desktopicons"/>
                    <form 
                    className="login-form"
                    onSubmit={(e) => this.login(e)}>
                        <p className="login-text">Email</p>
                        <input 
                        className="login-input"
                        type="text" 
                        placeholder="email" 
                        name="email" value={email} 
                        onChange={ e => this.changeHandler(e)}/>
                        <p className="login-text">Password</p>
                        <input 
                        className="login-input"
                        type='password' 
                        placeholder="password" 
                        name="password" 
                        value={password} 
                        onChange={ e => this.changeHandler(e)}/>
                        <input 
                        className="login-input"
                        type='submit' 
                        value='login'/>
                    </form>
                    <div className="land-span-container">
                    <p className="land-span">Don't have an account?</p>
                    <Link to='/register'>Register here</Link>
                    </div>
                </div>
            </div>
            {/* <div className="whitespace">I am white space</div> */}
            </div>
        )
    }
}
const mapStateToProps = reduxState => reduxState.authReducer
export default connect(mapStateToProps, {setUser})(Landing)