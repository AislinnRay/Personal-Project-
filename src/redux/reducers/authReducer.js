import axios from 'axios'

const initialState = {
  user: {
    email: '',
    password: '',
    phone: '',
    first_name: '',
    last_name: '',
    profile_pic: '',
    user_id: 0
  },
  isLoggedIn: false
  }

  const LOGOUT_USER = 'LOGOUT_USER'
  const SET_USER = 'SET_USER'
  const GET_USER = 'GET_USER'

export function logoutUser(user){
  console.log(user)
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

export function getUser(){
  console.log("hit")
  const user = axios.get('/auth/user')
  return {
    type: GET_USER, payload: user
  }
}
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOGOUT_USER:
        return initialState;
      case SET_USER:
        return {...state, user: action.payload, isLoggedIn: true} 
      case GET_USER + '_PENDING':
        return state
      case GET_USER + '_FULFILLED':
        return {...state, user: action.payload.data, isLoggedIn: true}
      // case GET_USER + '_REJECTED':
      //   return initialState
      default:
        return state;
    }
  }