import { ADD_INSPECTION_LISTS, TOTAL_INSPECTION_LISTS, UPDATE_TOTAL_INSPECTION_LISTS } from "../reducers/inspectionListStore";

export const totalInspectionListAction = lists => {
    return {
        type: TOTAL_INSPECTION_LISTS,
        payload: lists
    };
};

export const updateTotalInspectionLists = lists => {
    return {
        type: UPDATE_TOTAL_INSPECTION_LISTS,
        payload: lists
    };
};









//From db..//Total Inspection lists