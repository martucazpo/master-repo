import { connect } from "react-redux"
import Button from "./Button"
import { closeModal } from "../../utils/redux/actions/authActions"

const Modal = (props) =>{
    return(
        <div className={"modal " + props.modalClass }>
            <div className="modal-close-btn-wrapper">
                <Button btnTxt="CLOSE" btnClass="modal-close-btn" handleClick={props.closeModal} />
            </div>
            {props.children}
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        closeModal: ()=>dispatch(closeModal())
    }
}

export default connect(null, mapDispatchToProps)(Modal)