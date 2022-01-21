import { ADD_BREADCUMB, REMOVE_BREADCUMB, UPDATE_BREADCUMB } from "../../reducers/breadcumbReducer/breadcumbReducer";

export const addBreadcumbs = path => {
    return {
        type: ADD_BREADCUMB,
        payload: path
    };
};
export const updateBreadcumbs = index => {
    return {
        type: UPDATE_BREADCUMB,
        payload: index
    };
};
export const removeBreadcumbs = () => {
    return {
        type: REMOVE_BREADCUMB,
    };
};