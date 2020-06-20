import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Profile extends Component {
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
    update = async (e) => {
        e.preventDefault();
        const { email, password, firstName, lastName, profilePic } = this.state
        await axios.put('/auth/user', {email, password, firstName, lastName, profilePic})
        .then( res => {this.props.history.push('/')})
        .catch(err => {alert('Could not update user information')})
    }
     render(){
         const { email, password, firstName, lastName, profilePic } = this.state
        return(
            <div>
                This is the Profile component
                <form onSubmit={(e) => this.update(e)}>
                    <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={ e => this.changeHandler(e)}/>
                    <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={ e => this.changeHandler(e)}/>
                    <input type="text" placeholder="Profile Picture" name="profilePic" value={profilePic} onChange={ e => this.changeHandler(e)}/>
                    <input type="text" placeholder="email" name="email" value={email} onChange={ e => this.changeHandler(e)}/>
                    <input type='password' placeholder="password" name="password" value={password} onChange={ e => this.changeHandler(e)}/>
                    <input type='submit' value='update'/>
                </form>
                <span>Finished updating user profile?</span>
                <Link to='/dash'>Return to dashboard</Link>
            </div>
        )
    }
}