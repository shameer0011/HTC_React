import * as types from '../actionTypes/graphActions'

const graphOrder = {
    order: 'Ascending'
};

const graphReducer = (state = graphOrder, action) => {
    switch (action.type) {
        case types.GRAPH_ORDER:
            return {
                ...state,
                order: action.payload
            }
        default:
            return state;
    }
}
export default graphReducer;