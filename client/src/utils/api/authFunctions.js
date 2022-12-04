import axios from "axios";
import store from "../redux/store"
import { sendAuthMessage, getUserId } from "../redux/actions"
const authUrl = process.env.REACT_APP_AUTHURL

export const authFunctions = {
    loginAUser: (user)=>{
        axios.post( authUrl + "/login", user).then(data => {
            if(data.message){
                store.dispatch(sendAuthMessage(data.message))
            } else {
                store.dispatch(getUserId(data))
            }
        })
    },
    registerAUser: (user)=>{
        axios.post( authUrl + "/register", user).then(data => {
            if(data.message){
                store.dispatch(sendAuthMessage(data.message))
            } else {
                store.dispatch(getUserId(data))
            }
        })
    }
}