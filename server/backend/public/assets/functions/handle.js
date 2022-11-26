import store from "../utils/redux/store.js"
import { openModal, closeModal, showRegistrationForm, showLoginForm } from "../utils/redux/actions.js"
import { render } from "./render.js"

export const handleModalOpen = () =>{
    store.dispatch(openModal())
    render()
}


export const handleModalClose = () =>{
    store.dispatch(closeModal())
    render()
}

export const handleShowReg = () =>{
    store.dispatch(showRegistrationForm())
    render()
}

export const handleShowLog = () =>{
    store.dispatch(showLoginForm())
    render()
}
