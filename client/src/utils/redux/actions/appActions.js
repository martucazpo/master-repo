import { GET_APP_USER } from "../types"


export const getAppUserForApp =  (user) =>{
    return {
        type: GET_APP_USER,
        payload: user
    }
}