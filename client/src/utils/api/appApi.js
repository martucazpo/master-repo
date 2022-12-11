import store from "../redux/store"
import { getAppUserForApp } from "../redux/actions/appActions"
import axios from "axios"
const appUrl = process.env.REACT_APP_APPURL


const appApi = {
    getAppUser: (id)=>{
        axios.post(appUrl + '/user', id).then(res =>{
            return store.dispatch(getAppUserForApp(res.data))
        })
    }
}


export default appApi