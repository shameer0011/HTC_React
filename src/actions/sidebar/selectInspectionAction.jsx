import { REMOVE_SIDEBAR_DATA, TOTAL_SIDEBAR_DATA } from '../../reducers/sidebarReducer/SelectInspectionData'

export const sidebarSelectInspectDatas = lists => {
    return {
        type: TOTAL_SIDEBAR_DATA,
        payload: lists
    };
};
export const removeSidebarData = lists => {
    return {
        type: REMOVE_SIDEBAR_DATA,
        payload: lists
    };
};


