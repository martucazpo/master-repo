import { loginUser } from "../utils/API.js"
import { render } from "./render.js"
import store from "../utils/redux/store.js"



export const loginFormSubmit = async () =>{
    let { email, password } = store.getState().auth
    await loginUser({ email, password })
    render()
}