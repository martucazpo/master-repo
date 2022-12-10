import { OPEN_MODAL, CLOSE_MODAL, GET_INPUT, SEND_AUTH_MESSAGE, TOGGLE_LOGIN } from "../types"

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