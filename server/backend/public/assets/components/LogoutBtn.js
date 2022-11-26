// import store from "../utils/redux/store.js"
// import { } from "../functions/handle.js"


const LogoutBtn = () =>{
    const logoutBtn = document.createElement("button")
    logoutBtn.classList.add("the-logout-btn")
    logoutBtn.innerText = "LOG OUT"
    // if(!modalOpen){
    //     loginBtn.addEventListener("click", handleModalOpen)
    // } else {
    //     loginBtn.removeEventListener("click", handleModalOpen)
    // }  
    return logoutBtn 
}

export default LogoutBtn