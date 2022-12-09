import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./components/authComponents/PrivateRoute"
import PublicRoute from "./components/authComponents/PublicRoute"
import PrivateLanding from "./components/appComponents/PrivateLanding"
import PublicLanding from "./components/appComponents/PublicLanding"


const App = () =>{
    return (
        <>
        <Routes>
            <Route element={ <PublicRoute /> }>
                <Route path="/" element={ <PublicLanding /> } />
            </Route>
            <Route  element={ <PrivateRoute /> }>
                <Route path="/private-landing" element={ <PrivateLanding /> } />
            </Route>
        </Routes>
        </>
    )
}

export default App