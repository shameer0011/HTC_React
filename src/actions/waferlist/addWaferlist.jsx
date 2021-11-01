import { ADD_WAFERLISTS, REMOVE_WAFERLISTS } from "../../reducers/waferlist/waferlistReducer";

export const addWaferlistDatas = lists => {
    return {
        type: ADD_WAFERLISTS,
        payload: lists
    };
};
export const removeWaferlistDatas = lists => {
    return {
        type: REMOVE_WAFERLISTS,
        payload: lists
    };
};