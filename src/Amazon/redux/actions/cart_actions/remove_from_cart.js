import * as types from '../../actions/actionTypes';

export const remove_from_cart = (id) => ({
    type: types.REMOVE_FROM_CART,
    payload: id
})

