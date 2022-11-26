import Form from "./Form.js"
import { handleLogout } from "../functions/handle.js"


const LogoutBtn = () =>{
    return Form({
        subTxt: "LOG OUT",
        handleSubmit : handleLogout,
        children: []
    })
}

export default LogoutBtn