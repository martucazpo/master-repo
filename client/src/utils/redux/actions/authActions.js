import { CLOSE_AUTH_MODAL, GET_AUTH_INPUT, GET_USER_ID, SEND_AUTH_MESSAGE, TOGGLE_REGLOG_BTN, OPEN_AUTH_MODAL, LOG_OUT } from "../types"


export const getAuthInput = (input) =>{
    return {
        type: GET_AUTH_INPUT,
        payload: input
    }
}

export const toggleReglogBtn = () =>{
    return {
        type: TOGGLE_REGLOG_BTN
    }
}

export const sendAuthMessage = (message)=>{
    return {
        type: SEND_AUTH_MESSAGE,
        payload: message
    }
}

export const getUserId = (id) =>{
    return {
        type: GET_USER_ID,
        payload: id
    }
}

export const closeAuthModal = () =>{
    return {
        type:CLOSE_AUTH_MODAL
    }
}

export const openAuthModal = () =>{
    return {
        type:OPEN_AUTH_MODAL
    }
}

export const logout = () =>{
    return {
        type: LOG_OUT
    }
}
    