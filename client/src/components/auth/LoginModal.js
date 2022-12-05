import Modal from "../basic/Modal"
import LoginForm from "./LoginForm"
import RegistrationForm from "./RegistrationForm"
import { connect } from "react-redux"
import { closeAuthModal } from "../../utils/redux/actions/authActions"


const LoginModal = (props) => {
    return (
        <Modal
            action={props.closeAuthModal}
        >
            {
                props.authState.login ?
                    <LoginForm /> :
                    <RegistrationForm />
            }
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
        authState: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeAuthModal: () => dispatch(closeAuthModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)