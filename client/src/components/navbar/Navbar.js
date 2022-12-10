import { connect } from "react-redux"
import LogoutBtn from "./LogoutBtn"
import Button from "../blockComponents/Button"


const Navbar = (props) =>{
    return (
        <nav>
            { props.auth.isAuth ? <LogoutBtn /> : <Button btnTxt="LOGIN" handleClick={()=>{}} btnClass="login-reg-btn" /> }
        </nav>
    )
}

const mapStateToProps = (state) =>{
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(Navbar)