import { connect } from "react-redux"
import { toggleReglogBtn } from "../../utils/redux/actions"

const RegistrationLoginToggleBtn = (props) => {
    return (
        <button onClick={ props.toggleBtn }>{props.authState.login ? "REGISTER" : "LOGIN"}</button>
    )
}

const mapStateToProps = (state) => {
    return {
        authState: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleBtn: ()=>dispatch(toggleReglogBtn())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationLoginToggleBtn)