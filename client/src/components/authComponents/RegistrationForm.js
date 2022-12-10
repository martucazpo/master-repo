import { connect } from "react-redux"
import Form from "../blockComponents/Form"
import Textinput from "../blockComponents/Textinput"
import { sendAuthMessage } from "../../utils/redux/actions/authActions"
import LoginRegistrationBtn from "./LoginRegistrationBtn"


const RegistrationForm = (props) =>{
    const handleSubmit = (e) =>{
        e.preventDefault()
        if( props.auth.password1 !== props.auth.password2 ){
            props.sendAuthMessage("The passwords do not match")
        } else {
            //make an api call
        }
    }
    return (
        <div>
            <Form 
            handleSubmit={handleSubmit}
            btnTxt="REGISTER"
            >
                <Textinput labelTxt="First Name" name="firstName" />
                <Textinput labelTxt="Last Name" name="lastName"/>
                <Textinput labelTxt="Email" name="email"/>
                <Textinput labelTxt="Password" name="password1"/>
                <Textinput labelTxt="Please Re-enter Password" name="password2"/>
            </Form>
            <div>
                <h3>{ props.auth.authMessage }</h3>
            </div>
            <div>
                <LoginRegistrationBtn />
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        sendAuthMessage: (message)=>dispatch(sendAuthMessage(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)