import React from "react"
import { connect } from "react-redux"
import API from "../../utils/api"


class PrivateLanding extends React.Component {
    componentDidMount() {
        API.getAppUser({ _id: this.props.auth._id })
    }
    render() {
        return (
            <div className="landing private-landing">
                <h1 className="user-name-h1"><span className="user-name-span">{this.props.app.user.firstName} {this.props.app.user.lastName}</span> this is YOUR private landing page!</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        app: state.app
    }
}

export default connect(mapStateToProps, null)(PrivateLanding)