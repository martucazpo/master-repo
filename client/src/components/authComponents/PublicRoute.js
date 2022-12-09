import { connect } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const PublicRoute = (props) => {
    return (
        <>
            {props.auth.isAuth ? <Navigate to="/private-landing" /> : <Outlet />}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(PublicRoute)