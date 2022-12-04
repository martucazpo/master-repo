import React from "react"
import { connect } from "react-redux"
import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./components/auth/PrivateRoute"
import PublicRoute from "./components/auth/PublicRoute"
import Landing from "./components/app/Landing"
import PrivateLanding from "./components/app/PrivateLanding"
import Navbar from "./components/app/Navbar"


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Routes>
                    <Route element={<PublicRoute />} >
                        <Route path="/" element={<Landing />} />
                    </Route>
                    <Route element={<PrivateRoute />}>
                        <Route path="/private-landing" element={<PrivateLanding />} />
                    </Route>
                </Routes>
            </React.Fragment>
        )
    }
}

export default connect(null, null)(App)