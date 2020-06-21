// import React, {useState} from 'react'
// import {useDispatch} from 'react-redux'
// import {login} from '../redux/reducer'

// function Register() {
//     const [email, setEmail] = useState('')
//     const dispatch = useDispatch()
//     //const handleChange = ({name, value}) => this.setSTate({[name]: value})

//     return (
//         <div>
//             <div>
//                 <div>
//                     <h1>Register</h1>
//                     <input placeholder="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
//                     <button onClick={ () => dispatch(login({email, password}))}>Register</button>
//                 </div>
//             </div>
//             <pre>{JSON.stringify(email, null, 2)}</pre>
//         </div>
//     )
// }

// export default Register;
import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from '../redux/reducer';
import '../style/styleLand.css'
import plantIcon from "../images/black+plant+png.png"

class Register extends Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            profilePic: '',
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
        const { email, password, firstName, lastName} = this.state
        await axios.post('/auth/register', {email, password, firstName, lastName})
        .then( res => {
            this.props.setUser(res.data)
            this.props.history.push('/dash')})
        .catch(err => {alert('Could not register')})
    }
     render(){
         const { email, password, firstName, lastName } = this.state
        return(
            <div className="land-container">
                <h1>Plantsiful</h1>
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
                    placeholder="First Name" name="firstName" 
                    value={firstName} 
                    onChange={ e => this.changeHandler(e)}/>
                    <p className="login-text">Last Name</p>
                    <input 
                    className="login-input"
                    type="text" 
                    placeholder="Last Name" name="lastName" 
                    value={lastName} 
                    onChange={ e => this.changeHandler(e)}/>
                    {/* <input type="text" placeholder="Profile Picture" name="profilePic" value={profilePic} onChange={ e => this.changeHandler(e)}/> */}
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
export default connect(null, {setUser})(Register)