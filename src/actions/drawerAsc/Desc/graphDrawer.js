import { GRAPH_ORDER } from "../../../reducers/graphReducer/graphDrawerReducer"

export const graphOrder = (order) => {
    return {
        type: GRAPH_ORDER,
        payload: order
    }
}