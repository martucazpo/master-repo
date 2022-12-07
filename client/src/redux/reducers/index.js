import clockReducer from "./clockReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({time: clockReducer})


export default rootReducer