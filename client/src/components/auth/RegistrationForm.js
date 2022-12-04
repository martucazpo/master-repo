import Form from "../basic/Form"
import Textinput from "../basic/Textinput"
import RegistrationLoginToggleBtn from "./RegistrationLoginToggleBtn"
import { API } from "../../utils/api/API"
import { connect } from "react-redux"
import { sendAuthMessage } from "../../utils/redux/actions"



const RegistrationForm = (props) => {
    const handleForm = ({firstName, lastName, email, password1, password2}) => {
        if (password1 !== password2) {
            props.sendMessage("The passwords do not match")
        } else {
            let password = password1
            API.registerUser({firstName, lastName, email, password})
        }
    }
    return (
        <div>
            <div>
                <Form
                    action={handleForm}
                    args={{
                        firstName: props.authState.firstName,
                        lastName: props.authState.lastName,
                        email: props.authState.email,
                        password1: props.authState.password1,
                        password2: props.authState.password2
                    }}
                    btnText="REGISTER"
                >
                    <Textinput labelTxt="First Name" name="firstName" />
                    <Textinput labelTxt="Last Name" name="lastName" />
                    <Textinput labelTxt="Email" name="email" />
                    <Textinput labelTxt="Password" name="password1" />
                    <Textinput labelTxt="Please re-enter password" name="password2" />
                </Form>
            </div>
            <div>
                {props.authState.loginMessage && <h3>{props.authState.loginMessage}</h3>}
            </div>
            <div>
                <RegistrationLoginToggleBtn />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authState: state.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: (message)=>dispatch(sendAuthMessage(message))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)