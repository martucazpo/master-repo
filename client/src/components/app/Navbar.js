import { connect } from "react-redux"
import { openAuthModal } from "../../utils/redux/actions/authActions"
import { API } from "../../utils/api"


const Navbar = (props) => {
    return (
        <nav>
            {
                !props.authState.isAuth ?
                    <button
                        onClick={!props.authState.modalOpen ?
                            props.openAuthModal :
                            null}>
                        LOGIN</button> :
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        API.logoutUser(props.appState.user)
                    }}>
                        <button type="submit">LOGOUT</button>
                    </form>
            }
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        authState: state.auth,
        appState: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openAuthModal: () => dispatch(openAuthModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)