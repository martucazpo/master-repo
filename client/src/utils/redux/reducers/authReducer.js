import { CLOSE_MODAL, GET_AUTH_USER, GET_INPUT, LOGOUT, OPEN_MODAL, SEND_AUTH_MESSAGE, TOGGLE_LOGIN } from "../types"

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
    login: true,
    _id: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modalOpen: true,
                authMessage: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                login: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modalOpen: false,
                authMessage: "",
                login: true,
                modalOpen: false,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                authMessage: "",
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
        case GET_AUTH_USER:
            return {
                ...state,
                isAuth: action.payload.loggedIn,
                _id: action.payload._id,
                modalOpen: false,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                authMessage: "",
                login: true,
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
                modalOpen: false,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                authMessage: "",
                login: true,
                _id: ""
            }
        default:
            return state
    }
}


export default authReducer