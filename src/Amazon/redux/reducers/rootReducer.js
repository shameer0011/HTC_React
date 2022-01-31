import { combineReducers } from "redux";
import cartReducer from "./cart_reducers/add_to_cart";
import authReducer from "./reducers";

const rootReducer = combineReducers({
    data: authReducer,
    cartData: cartReducer
})

export default rootReducer;