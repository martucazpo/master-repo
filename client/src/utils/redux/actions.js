import { GET_AUTH_INPUT } from "./types"


export const getAuthInput = (input) =>{
    return {
        type: GET_AUTH_INPUT,
        payload: input
    }
}