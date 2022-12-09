import { connect } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const PrivateRoute = (props) => {
    return (
        <>
            {props.auth.isAuth ? <Outlet /> : <Navigate to="/" />}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(PrivateRoute)