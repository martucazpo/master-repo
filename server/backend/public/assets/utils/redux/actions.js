import { GET_INPUT, LOGGEDIN_USER, REGISTERED_USER, SEND_MESSAGE } from "./types.js"

export const getInput = (input) =>{
    return {
        type: GET_INPUT,
        payload: input
    }
}

export const registeredUser = (user) =>{
    return {
        type:REGISTERED_USER,
        payload: user
    }
}

export const loggedinUser = (user) =>{
    return {
        type: LOGGEDIN_USER,
        payload: user
    }
}

export const sendMessage = (message) =>{
    return {
        type: SEND_MESSAGE,
        payload: message
    }
}

