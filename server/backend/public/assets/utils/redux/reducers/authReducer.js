import { GET_INPUT } from "../types.js"

let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    users: [],
    authMessage: "",
    authToken: ""
}

const AuthReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_INPUT:
            let { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }
        case REGISTERED_USER:
            return {
                ...state,
                users: [action.payload, ...state.users],
                authMessage: "",
                authToken: action.payload._id
            }
        default:
            return state
    }
}

export default AuthReducer