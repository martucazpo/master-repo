import { sendMessage } from "../utils/redux/actions.js"
import { registerUser } from "../utils/API.js"
import { render } from "./render.js"
import store from "../utils/redux/store.js"
const bcrypt = dcodeIO.bcrypt

export const regFormSubmit = async () =>{
    let { firstName, lastName, email, password1, password2 } = store.getState().auth
    if(password1 !== password2){
        store.dispatch(sendMessage("The passwords do not match"))
        render()
        return
    } else {
        let password = bcrypt.hashSync(password1, 10)
        await registerUser({ firstName, lastName, email, password })
        render()
        return
    }
}