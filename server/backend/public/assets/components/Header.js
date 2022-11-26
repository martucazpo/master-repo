import store from "../utils/redux/store.js"
import LoginBtn from "./LoginBtn.js"
import LogoutBtn from "./LogoutBtn.js"

const Header = () =>{
    let isAuth = store.getState().auth.isAuth
    const header = document.createElement("header")
    header.classList.add("main-header")
    if(!isAuth){
        header.append(LoginBtn())
    } else {
        header.append(LogoutBtn())
    }
    return header
}

export default Header