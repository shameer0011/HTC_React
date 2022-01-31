import * as types from '../actionTypes';
export const add_to_cart = (item) => {
    console.log(item, "ityemsss")
    return {
        type: types.ADD_TO_CART,
        payload: item
    }
}