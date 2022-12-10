import { CLOSE_MODAL, OPEN_MODAL } from "../types"

let initialState = {
    isAuth: false,
    modalOpen: false
}

const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case OPEN_MODAL:
            return {
                ...state,
                modalOpen: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modalOpen: false
            }
        default:
            return state
    }
}


export default authReducer