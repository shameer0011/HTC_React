import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import Thunk from 'redux-thunk'
import rootReducer from "../reducers/rootReducer";

const middleware = [Thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}
const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export default store;



//if i have clarification , i can use this code
//import { createStore, applyMiddleware, compose } from "redux";

//const store = createStore(rootReducer, compose(applyMiddleware(thunk)); just type thunk with only import



