import { connect } from "react-redux"
import { getInput } from "../../utils/redux/actions/authActions"


const Textinput = (props) => {
    return (
        <span>
            <label
                htmlFor={props.name}>
                {props.labelTxt}
            </label>
            <input
                type="text"
                name={props.name}
                id={props.name}
                value={props.auth[props.name]}
                onChange={(e) => props.getInput(e.target)}
                required={props.required || true}
            />
        </span>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInput: (input)=>dispatch(getInput(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Textinput)