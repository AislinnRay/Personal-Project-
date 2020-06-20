import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux';
import {setUser} from '../redux/reducer'

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            profilePic: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        this.setState({
            firstName: this.props.user.first_name,
            lastName: this.props.user.last_name, 
            profilePic: this.props.user.profile_pic, 
            email: this.props.user.email, 
            password: this.props.user.password})
        console.log(this.props)
    }
    update = async (e) => {
        e.preventDefault();
        const { email, password, firstName, lastName, profilePic } = this.state
        await axios.put('/auth/user', {email, password, firstName, lastName, profilePic})
        .then( res => {
            this.props.setUser(res.data)
            this.props.history.push('/dash')
        })
        .catch(err => {alert('Could not update user information')})
    }
    logout = () => {
        axios.delete('/auth/logout')
        .then( () => { this.props.history.push('/')})
    }
     render(){
         const { email, password, firstName, lastName, profilePic } = this.state
        return(
            <div>
                This is the Profile component
                <button onClick={() => this.logout()}>Logout</button>
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
const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {setUser})(Profile)