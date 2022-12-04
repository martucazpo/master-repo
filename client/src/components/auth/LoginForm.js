import Form from "../basic/Form"
import Textinput from "../basic/Textinput"
import RegistrationLoginToggleBtn from "./RegistrationLoginToggleBtn"
import { API } from "../../utils/api/API"
import { connect } from "react-redux"


const LoginForm = (props) =>{
    return (
        <div>
            <div>
               <Form 
               action={ API.loginUser }
               args={{
                email: props.authState.email,
                password: props.authState.password
               }}
               btnText="LOGIN"
               >
                <Textinput labelTxt="Email" name="email" />
                <Textinput labelTxt="Password" name="password" />
                </Form> 
            </div>
            <div>
                { props.authState.loginMessage && <h3>{ props.authState.loginMessage }</h3> }
            </div>
            <div>
                <RegistrationLoginToggleBtn />
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        authState: state.auth
    }
}


export default connect(mapStateToProps, null)(LoginForm)