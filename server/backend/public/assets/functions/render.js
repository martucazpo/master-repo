import LoginModal from "../components/LoginModal.js"
import Header from "../components/Header.js"
import store from "../utils/redux/store.js"



const mainDiv = document.getElementById("mainDiv")


export const render = () => {
    const modalOpen = store.getState().auth.modalOpen
    const authState = store.getState().auth.isAuth
    mainDiv.innerHTML = ""
    if (!authState && modalOpen) {
        mainDiv.append(Header())
        mainDiv.append(LoginModal())
        const inputs = [...document.querySelectorAll("input")]
        inputs.forEach(input => input.value = store.getState()[input.attributes.data.value][input.name])
    } else if(!authState && !modalOpen){
        mainDiv.append(Header())
    }else {
        let h1 = document.createElement("h1")
        h1.innerText = "You're logged in!"
        mainDiv.append(Header())
        mainDiv.append(h1)
    }

}

