import * as types from '../../actions/actionTypes'

let initialState = {
    basket: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            let newBasket = [...state.basket, action.payload]
            return {
                ...state, basket: newBasket
            }
        case types.REMOVE_FROM_CART:
            console.log("in remove itemsss")
            const oldCart = [...state.basket]
            const index = state.basket.findIndex((item) => item.id === action.payload)
            if (index >= 0) {
                oldCart.splice(index, 1)
            }
            return { ...state, basket: oldCart }
        default:
            return state
    }
}
export default cartReducer;