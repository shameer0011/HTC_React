import { CHANGE_LABEL, CHANGE_ORDER } from "../../reducers/sortWaferlist/wafwerlistSortReducer"

export const changeOrder = (order) => {
    console.log("in sort wafer action")
    return {
        type: CHANGE_ORDER,
        payload: order
    }
}
export const changeLabel = (label) => {
    console.log("in sort wafer action")
    return {
        type: CHANGE_LABEL,
        payload: label
    }
}

