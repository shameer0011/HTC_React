import { ADD_BREADCUMB, UPDATE_BREADCUMB } from "../../reducers/breadcumbReducer/breadcumbReducer";

export const addBreadcumbs = path => {
    return {
        type: ADD_BREADCUMB,
        payload: path
    };
};
export const updateBreadcumbs = index => {
    console.log(index, "action index")
    return {
        type: UPDATE_BREADCUMB,
        payload: index
    };
};