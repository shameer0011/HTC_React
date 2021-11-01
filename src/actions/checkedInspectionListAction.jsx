import { CHECKED_INSPECTION_LISTS, UNCHECKED_INSPECTION_LISTS } from "../reducers/checkedInspectionList";

export const checkedInspectionListAction = lists => {
    return {
        type: CHECKED_INSPECTION_LISTS,
        payload: lists
    };
};
export const uncheckedInspectionListAction = lists => {
    return {
        type: UNCHECKED_INSPECTION_LISTS,
        payload: lists
    };
};