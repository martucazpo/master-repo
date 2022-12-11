import store from "../redux/store"
import { sendAuthMessage, getAuthUser,logout } from "../redux/actions/authActions"
import axios from "axios"
const authUrl = process.env.REACT_APP_AUTHURL


const authApi = {
    registerAUser: (user)=>{
        axios.post(authUrl + "/register", user).then(res => {
            if( res.data.message ){
                return store.dispatch(sendAuthMessage(res.data.message))
            } else {
                return store.dispatch(getAuthUser(res.data))
            }
        })
    },
    loginAUser: (user)=>{
        axios.post(authUrl + "/login", user).then(res => {
            if( res.data.message ){
                return store.dispatch(sendAuthMessage(res.data.message))
            } else {
                return store.dispatch(getAuthUser(res.data))
            }
        })
    },
    logoutAUser: (id)=>{
        axios.post(authUrl + "/logout", id).then(res => {
            console.log(res.data.message)
            return store.dispatch(logout())
        })
    }
}


export default authApi
