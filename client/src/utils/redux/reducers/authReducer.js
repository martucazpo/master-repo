import { CLOSE_MODAL, GET_INPUT, OPEN_MODAL, SEND_AUTH_MESSAGE, TOGGLE_LOGIN } from "../types"

let initialState = {
    isAuth: false,
    modalOpen: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password1: "",
    password2: "",
    authMessage: "",
    login: false
}

const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case OPEN_MODAL:
            return {
                ...state,
                modalOpen: true,
                authMessage: "",
               login: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modalOpen: false,
                authMessage: "",
                login: true
            }
        case GET_INPUT:
            let { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }
        case SEND_AUTH_MESSAGE:
            return {
                ...state,
                authMessage: action.payload
            }
        case TOGGLE_LOGIN:
            return {
                ...state,
                login: !state.login,
                authMessage: ""
            }
        default:
            return state
    }
}


export default authReducer