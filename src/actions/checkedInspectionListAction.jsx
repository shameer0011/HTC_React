import { CHECKED_INSPECTION_LISTS } from "../reducers/checkedInspectionList";

export const checkedInspectionListAction = lists => {
    console.log(lists, "listsss")
    return {
        type: CHECKED_INSPECTION_LISTS,
        payload: lists
    };
};