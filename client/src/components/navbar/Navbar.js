import { connect } from "react-redux"
import LogoutBtn from "./LogoutBtn"
import Button from "../blockComponents/Button"
import { openModal } from "../../utils/redux/actions/authActions"


const Navbar = (props) =>{
    return (
        <nav>
            { props.auth.isAuth ? <LogoutBtn /> : <Button btnTxt="LOGIN" handleClick={props.openModal} btnClass="login-reg-btn" /> }
        </nav>
    )
}

const mapStateToProps = (state) =>{
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        openModal: ()=>dispatch(openModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)