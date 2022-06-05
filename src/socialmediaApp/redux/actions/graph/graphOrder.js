import * as types from '../../actionTypes/graphActions'
//this for form login
export const graphOrder = (order) => {  //for passing parameter to api and routing section only
    return {
        type: types.GRAPH_ORDER,
        payload: order,

    }
}
