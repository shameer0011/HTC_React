import {
    GET_PAGE_INDEX, UPDATE_PAGE_INDEX
} from "../reducers/pageReducer";

export const getPageIndex = () => {
    return {
        type: GET_PAGE_INDEX,
    };
};

export const updatePageIndex = index => {
    return {
        type: UPDATE_PAGE_INDEX,
        payload: index
    };
};