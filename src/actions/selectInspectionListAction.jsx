import { SELECT_INSPECTION_LISTS } from "../reducers/selectListReducer";

export const selectInspectionList = lists => {
    return {
        type: SELECT_INSPECTION_LISTS,
        payload: lists
    };
};

// total inspection list