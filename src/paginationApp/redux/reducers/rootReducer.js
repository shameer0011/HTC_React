import { combineReducers } from "redux";
import authReducer from "./authReducer";
import fetchReducer from "./fetchReducer";


const rootReducer = combineReducers({
    data: fetchReducer,
    authReducer: authReducer

})

export default rootReducer;