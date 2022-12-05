import axios from "axios";
import store from "../redux/store"
import { sendAuthMessage, getUserId, logout } from "../redux/actions/authActions"
const authUrl = process.env.REACT_APP_AUTHURL

export const authFunctions = {
    loginAUser: (user)=>{
        axios.post( authUrl + "/login", user).then(res => {
            if(res.data.message){
                store.dispatch(sendAuthMessage(res.data.message))
            } else {
                store.dispatch(getUserId(res.data))
            }
        })
    },
    registerAUser: (user)=>{
        axios.post( authUrl + "/register", user).then(res => {
            if(res.data.message){
                store.dispatch(sendAuthMessage(res.data.message))
            } else {
                store.dispatch(getUserId(res.data))
            }
        })
    },
    logoutAUser: (user)=>{
        axios.post( authUrl + "/logout", user).then(res =>{
            console.log(res.data)
            store.dispatch(logout())
        })
    }
}