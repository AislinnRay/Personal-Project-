const initialState = {
    plant: {
      common_name: '',
      scientific_name: '',
      note: '',
      water_interval: '',
      category: '',
      plant_id: 0
    }
    }
  
    const SET_PLANT = 'SET_PLANT'

  export function setPlant(payload){
    console.log(payload)
      return {
          type: SET_PLANT, payload: payload
      }
  }
    
    export default function (state = initialState, action) {
      switch (action.type) {
        case SET_PLANT:
          return {...state, plant: action.payload}  
        default:
          return initialState;
      }
    }