import RegisterForm from "../components/RegisterForm.js"
import { regFormProps, loginFormProps } from "../js/props.js"
import LoginForm from "../components/LoginForm.js"
import store from "../utils/redux/store.js"



const mainDiv = document.getElementById("mainDiv")


export const render = () => {
    const authState = store.getState().auth.isAuth
    mainDiv.innerHTML = ""
    if (!authState) {
        mainDiv.append(RegisterForm(regFormProps))
        mainDiv.append(LoginForm(loginFormProps))
        const inputs = [...document.querySelectorAll("input")]
        inputs.forEach(input => input.value = store.getState()[input.attributes.data.value][input.name])
    } else {
        let h1 = document.createElement("h1")
        h1.innerText = "You're logged in!"
        mainDiv.append(h1)
    }

}

