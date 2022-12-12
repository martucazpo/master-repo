import Form from "../blockComponents/Form"
import API from "../../utils/api"
import { connect } from "react-redux"

const LogoutBtn = (props) =>{
    const handleSubmit=(e)=>{
        e.preventDefault()
        API.logout({ _id: props.auth._id})
    }
    return <Form handleSubmit={handleSubmit} btnTxt="LOGOUT" formClass="logout-form"/>
    
}

const mapStateToProps = (state) =>{
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(LogoutBtn)