import Modal from "../blockComponents/Modal"
import { connect } from "react-redux"

const PublicLanding = (props) => {
    return (
        <>
            {props.auth.modalOpen && <Modal />}
            <h1>Public Landing</h1>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, null)(PublicLanding)