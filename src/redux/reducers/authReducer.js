import axios from 'axios'

const initialState = {
  user: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    profilePic: '',
    user_id: 0
  },
  isLoggedIn: false
  }

  const LOGOUT_USER = 'LOGOUT_USER'
  const SET_USER = 'SET_USER'

export function logoutUser(user){
    return {
        type: LOGOUT_USER, payload: user
    }
}

export function setUser(payload){
  console.log(payload)
    return {
        type: SET_USER, payload: payload
    }
}
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOGOUT_USER:
        return initialState;
    case SET_USER:
        return {...state, user: action.payload, isLoggedIn: true}  
      default:
        return initialState;
    }
  }