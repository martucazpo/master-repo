import { connect } from "react-redux"
import { openAuthModal } from "../../utils/redux/actions"


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
                        //logout action from api
                    }}>
                        <button type="submit">LOGOUT</button>
                    </form>
            }
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        authState: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openAuthModal: () => dispatch(openAuthModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)