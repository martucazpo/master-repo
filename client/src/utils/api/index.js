import { appFunctions } from "./appFunctions"
import { authFunctions }from "./authFunctions"

export const API = {
    loginUser : authFunctions.loginAUser,
    registerUser: authFunctions.registerAUser,
    logoutUser: authFunctions.logoutAUser,
    getUser: appFunctions.getAUser
}