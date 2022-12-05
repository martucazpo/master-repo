import React from 'react'
import { API } from "../../utils/api"
import { connect } from "react-redux"

class PrivateLanding extends React.Component {
    componentDidMount(){
        API.getUser({_id: this.props.authState._id})
    }
    render() {
        return (
            <h1>This is a PRIVATE landing page just for you {this.props.appState.firstName} {this.props.appState.lastName}</h1>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        appState: state.app.user,
        authState: state.auth.data
    }
}

export default connect(mapStateToProps, null)(PrivateLanding)

