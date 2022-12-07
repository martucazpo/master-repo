import React from "react"
import { connect } from "react-redux"

class App extends React.Component{
    render(){
        return(
            <div>
                <h3>Time: { this.props.state.time }</h3>
                <button>Start Timer</button>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return {
        state: state.time
    }
}

export default connect(mapStateToProps,null)(App)