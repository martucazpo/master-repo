import axios from "axios";
import store from "../redux/store"
import { getUser } from "../redux/actions/appActions"
const appUrl = process.env.REACT_APP_APPURL


export const appFunctions = {
    getAUser: (user)=>{
        axios.post( appUrl + "/user", user).then( res => store.dispatch(getUser(res.data)))
    }
}