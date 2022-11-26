import { GET_INPUT } from "../types.js"

let initialState = {}

const appReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_INPUT:
            let { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }
        default:
            return state
    }
}

export default appReducer