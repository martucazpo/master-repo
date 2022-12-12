import Modal from "../blockComponents/Modal"
import RegistrationForm from "./RegistrationForm"
import LoginForm from "./LoginForm"
import { connect } from "react-redux"


const LoginModal = (props) => {
    return (
        <Modal modalClass="login-modal">
            {props.auth.login ? <LoginForm /> : <RegistrationForm />}
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(LoginModal)