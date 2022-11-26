import { GET_INPUT, REGISTERED_USER } from "./types.js"

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

