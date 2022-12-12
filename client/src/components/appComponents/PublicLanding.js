import LoginModal from "../authComponents/LoginModal"
import { connect } from "react-redux"

const PublicLanding = (props) => {
    return (
        <div className="landing public-landing">
            {props.auth.modalOpen && <LoginModal />}
            <h1>Public Landing</h1>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, null)(PublicLanding)