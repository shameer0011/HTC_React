// authReducer

import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import graphReducer from "../reducers/graphReducer";
import postReducer from "../reducers/postReducer";



const rootReducer = combineReducers({
    user: authReducer,
    post: postReducer,
    graph: graphReducer
})

export default rootReducer;