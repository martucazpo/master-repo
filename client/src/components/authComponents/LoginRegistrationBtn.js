import Button from '../blockComponents/Button'
import { connect } from "react-redux"
import { toggleLogin } from "../../utils/redux/actions/authActions"


const LoginRegistrationBtn = (props) =>{
    return <Button 
    btnTxt={ props.auth.login ? "REGISTER" : "LOGIN"}
    handleClick={ props.toggleLogin }
    btnClass="login-registration-btn"
    />
}

const mapStateToProps = (state) =>{
    return {
        auth: state.auth
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        toggleLogin: ()=>dispatch(toggleLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegistrationBtn)