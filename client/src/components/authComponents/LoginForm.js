import { connect } from "react-redux"
import Form from "../blockComponents/Form"
import Textinput from "../blockComponents/Textinput"
import LoginRegistrationBtn from "./LoginRegistrationBtn"
import API from "../../utils/api"


const LoginForm = (props) =>{
    const handleSubmit = (e) =>{
        e.preventDefault()
        let { email, password } = props.auth
        API.login({ email, password })
    }
    return (
        <div>
            <Form 
            handleSubmit={handleSubmit}
            btnTxt="LOGIN"
            formClass="auth-form"
            >
                <Textinput labelTxt="Email" name="email"/>
                <Textinput labelTxt="Password" name="password"/>
            </Form>
            <div className="auth-message-div">
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


export default connect(mapStateToProps, null)(LoginForm)