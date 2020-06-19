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

export default class Register extends Component {
    render(){
        return(
            <div>This is the Register component</div>
        )
    }
}