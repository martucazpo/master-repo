import { connect } from "react-redux"
import Button from "./Button"
import { closeModal } from "../../utils/redux/actions/authActions"

const Modal = (props) =>{
    return(
        <div className={"modal" + props.modalClass} >
            <Button btnTxt="CLOSE" btnClass="modal-close-btn" handleClick={props.closeModal} />
            <h1>MODAL</h1>
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