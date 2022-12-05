import { connect } from "react-redux"
import { getAuthInput } from "../../utils/redux/actions/authActions"

const Textinput = (props) => {
    return (
        <span>
            <label htmlFor={props.name}>
                {props.labelTxt}
            </label>
            <input
                onChange={(e) => props.getAuthInput(e.target)}
                type="text"
                name={props.name}
                value={props.authState[props.name]}
                required={props.required || true}
                id={props.name}
            />
        </span>

    )
}

const mapStateToProps = (state) => {
    return {
        authState: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAuthInput: (input) => dispatch(getAuthInput(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Textinput)