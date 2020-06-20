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

export default class Register extends Component {
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
        .then( res => {this.props.history.push('/dash')})
        .catch(err => {alert('Could not register')})
    }
     render(){
         const { email, password, firstName, lastName } = this.state
        return(
            <div>
                This is the Register component
                <form onSubmit={(e) => this.register(e)}>
                    <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={ e => this.changeHandler(e)}/>
                    <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={ e => this.changeHandler(e)}/>
                    {/* <input type="text" placeholder="Profile Picture" name="profilePic" value={profilePic} onChange={ e => this.changeHandler(e)}/> */}
                    <input type="text" placeholder="email" name="email" value={email} onChange={ e => this.changeHandler(e)}/>
                    <input type='password' placeholder="password" name="password" value={password} onChange={ e => this.changeHandler(e)}/>
                    <input type='submit' value='register'/>
                </form>
                <span>Already have an account? Login here: </span>
                <Link to='/'>Login</Link>
            </div>
        )
    }
}