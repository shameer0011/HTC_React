import {
    ADD_SELECT_INSPECTION_LISTS,
    REMOVE_SELECT_INSPECTION_LIST
} from "../reducers/selectInspectionList";


export const addSelectInspectionLists = lists => {
    return {
        type: ADD_SELECT_INSPECTION_LISTS,
        payload: lists
    };
};

// ..> To wafer list

export const removeSelectInspectionList = lists => {
    return {
        type: REMOVE_SELECT_INSPECTION_LIST,
        payload: lists
    };
};




