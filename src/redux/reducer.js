import axios from 'axios'

const initialState = {
  user: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    profilePic: '',
    user_id: 0
  }
  }

  // const LOGIN_USER = 'LOGIN_USER'
  // const LOGOUT_USER = 'LOGOUT_USER'
  // const GET_USER = 'GET_USER'
  // const FULFILLED = "_FULFILLED"
  const SET_USER = 'SET_USER'

// export function loginUser(user){
//   return {
//       type: LOGIN_USER,
//       payload: user
//     }
// }

// export function logoutUser(user){
//     return {
//         type: LOGOUT_USER, payload: user
//     }
// }

// export function getUser(){
//     const user = axios.get('/auth/user')
//     return {
//         type: GET_USER, payload: initialState
//     }
// }

export function setUser(payload){
    return {
        type: SET_USER, payload: payload
    }
}
  
  export default function (state = initialState, action) {
    switch (action.type) {
      // case LOGIN_USER:
      //   return { ...state, user: action.payload };
      // case LOGOUT_USER:
      //   return initialState;
      // case GET_USER + '_PENDING':
      //     return state
      // case GET_USER + FULFILLED:
      //     return {...state, user: action.payload}
      // case GET_USER + '_REJECTED':
      //     return initialState
    case SET_USER:
        return {...state, user: action.payload}  
      default:
        return initialState;
    }
  }