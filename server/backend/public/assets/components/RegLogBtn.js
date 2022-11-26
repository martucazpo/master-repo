import store from "../utils/redux/store.js"
import { handleShowReg, handleShowLog} from "../functions/handle.js"

const RegLogBtn = () =>{
    let login = store.getState().auth.login
    let regLoginDiv = document.createElement("div")
    regLoginDiv.innerHTML = ""
    if(login){
        let regBtn = document.createElement("button")
        regBtn.innerText = "REGISTER"
        regBtn.classList.add("reg-login-btn")
        regBtn.addEventListener("click", handleShowReg)
        regLoginDiv.append(regBtn)
    } else {
        let logBtn = document.createElement("button")
        logBtn.innerText = "LOGIN"
        logBtn.classList.add("reg-login-btn")
        logBtn.addEventListener("click", handleShowLog)
        regLoginDiv.append(logBtn)
    }
    return regLoginDiv
}

export default RegLogBtn