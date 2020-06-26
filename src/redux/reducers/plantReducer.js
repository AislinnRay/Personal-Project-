const initialState = {
      plants: []
    }
  
    const SET_PLANTS = 'SET_PLANTS'

  export function setPlants(plants){
      return {
          type: SET_PLANTS, 
          payload: plants
      }
  }
  
    export default function (state = initialState, action) {
      switch (action.type) {
        case SET_PLANTS:
          return {...state, plants: action.payload}
        default:
          return initialState;
      }
    }