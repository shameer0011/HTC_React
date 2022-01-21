import { REMOVE_SIDEBAR_DATA, TOTAL_SIDEBAR_DATA, UPDATE_SIDEBAR_DATA, UPDATE_SIDEBAR_VALUE } from '../../reducers/sidebarReducer/SelectInspectionData'

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
export const updateSidebarDataAction = lists => {
    return {
        type: UPDATE_SIDEBAR_DATA,
        payload: lists
    };
};
export const updateSidebarValueAction = lists => {
    return {
        type: UPDATE_SIDEBAR_VALUE,
        payload: lists
    };
};



