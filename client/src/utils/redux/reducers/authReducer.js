import { CLOSE_AUTH_MODAL, GET_AUTH_INPUT, GET_USER_ID, SEND_AUTH_MESSAGE, TOGGLE_REGLOG_BTN, OPEN_AUTH_MODAL, LOG_OUT } from "../types"

let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password1: "",
    password2: "",
    isAuth: false,
    modalOpen: false,
    login: true,
    loginMessage: "",
    data: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTH_INPUT:
            let { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }
        case TOGGLE_REGLOG_BTN:
            return {
                ...state,
                login: !state.login,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                loginMessage: "",
            }
        case SEND_AUTH_MESSAGE:
            return {
                ...state,
                loginMessage: action.payload
            }
        case GET_USER_ID:
            return {
                ...state,
                isAuth: true,
                data: action.payload,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                loginMessage: "",
                modalOpen: false,
                login: true
            }
        case CLOSE_AUTH_MODAL:
            return {
                ...state,
                modalOpen: false,
                login: true,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                loginMessage: "",
            }
        case OPEN_AUTH_MODAL:
            return {
                    ...state,
                    modalOpen: true,
                    login: true
                }
        case LOG_OUT:
            return initialState
        default:
            return state
    }
}


export default authReducer