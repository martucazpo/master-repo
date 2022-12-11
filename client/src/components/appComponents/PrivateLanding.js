import React from "react"
import { connect } from "react-redux"
import API from "../../utils/api"


class PrivateLanding extends React.Component{
    componentDidMount(){
        API.getAppUser({_id: this.props.auth._id})
    }
    render(){
       return (
        <h1>{ this.props.app.user.firstName } { this.props.app.user.lastName } this is YOUR private landing page!</h1>
    ) 
    }   
}

const mapStateToProps = (state) =>{
    return {
        auth: state.auth,
        app: state.app
    }
}

export default connect(mapStateToProps, null)(PrivateLanding)