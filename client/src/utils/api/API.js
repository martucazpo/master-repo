import { authFunctions }from "./authFunctions"

export const API = {
    loginUser : authFunctions.loginAUser,
    registerUser: authFunctions.registerAUser
}