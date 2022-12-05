import { GET_USER } from "../types"

let initialState = {
    user: {}
}


const appReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}



export default appReducer