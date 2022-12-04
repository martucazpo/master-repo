import { GET_AUTH_INPUT } from "../types"

let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password1: "",
    password2: "",
    isAuth: true,
    modalOpen: false,
    login: true,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTH_INPUT:
            let { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }
        default:
            return state
    }
}


export default authReducer