import { OPEN_MODAL, CLOSE_MODAL, GET_INPUT, SEND_AUTH_MESSAGE, TOGGLE_LOGIN, GET_AUTH_USER, LOGOUT } from "../types"

export const openModal = () =>{
    return {
        type: OPEN_MODAL
    }
}

export const closeModal = () =>{
    return {
        type: CLOSE_MODAL
    }
}

export const getInput = (input) =>{
    return {
        type: GET_INPUT,
        payload: input
    }
}

export const sendAuthMessage = (message)=>{
    return {
        type: SEND_AUTH_MESSAGE,
        payload: message
    }
}

export const toggleLogin = () =>{
    return {
        type: TOGGLE_LOGIN,
    }
}

export const getAuthUser = (user) =>{
    return {
        type: GET_AUTH_USER,
        payload: user
    }
}

export const logout = () =>{
    return {
        type: LOGOUT,
    }
}