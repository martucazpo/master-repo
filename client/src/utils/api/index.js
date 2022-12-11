import authApi from "./authApi"
import appApi from "./appApi"


const API = {
    register: authApi.registerAUser,
    login: authApi.loginAUser,
    logout: authApi.logoutAUser,
    getAppUser: appApi.getAppUser
}

export default API