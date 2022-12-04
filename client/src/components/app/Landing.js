import LoginModal from "../auth/LoginModal"
import { connect } from "react-redux"

const Landing = (props) => {
    return (
        <div>
            {
                props.authState.modalOpen && <LoginModal />
            }
            <h1>Hello! This is a PUBLIC landing page!</h1>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        authState: state.auth
    }
}

export default connect(mapStateToProps, null)(Landing)