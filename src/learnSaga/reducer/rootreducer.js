import { combineReducers } from "redux";
import getOneUserCommentReducer from "./getOneCommentReducer";
import getallUserReducer from "./getTotalUsersData";
import postOneDataReducer from "./postOneDataReducer";

const rootReducer = combineReducers({

    getOneUserCommentReducer,
    getallUserReducer,
    postOneDataReducer
})

export default rootReducer;




