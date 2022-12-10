import { connect } from "react-redux"


const Navbar = (props) =>{
    return (
        <nav>
            { props.auth.isAuth ? <h3>LOGOUT</h3> : <h3>LOGIN</h3> }
        </nav>
    )
}

const mapStateToProps = (state) =>{
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(Navbar)