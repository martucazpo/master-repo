import { GET_INPUT, LOGGEDIN_USER, REGISTERED_USER, SEND_MESSAGE } from "../types.js"

let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password1: "",
    password2: "",
    users: [],
    authMessage: "",
    authToken: "",
    isAuth: false
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
                firstName: "",
                lastName: "",
                email: "",
                password1: "",
                password2: "",
                authToken: action.payload._id,
                isAuth: action.payload.isAuth
            }
        case LOGGEDIN_USER:
            return {
                ...state,
                email: "",
                password: "",
                authMessage: "",
                isAuth: action.payload.isAuth
            }
        case SEND_MESSAGE:
            return {
                ...state,
                authMessage: action.payload
            }
        default:
            return state
    }
}

export default AuthReducer