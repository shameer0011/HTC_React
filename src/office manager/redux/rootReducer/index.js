import { combineReducers } from "redux";
import deptReducer from '../reducers/department/deptReducer';
import homeSetterReducer from "../reducers/homeSetter/homeSetter";

const rootReducer = combineReducers({

    department: deptReducer,
    homeSetter: homeSetterReducer,
})

export default rootReducer;