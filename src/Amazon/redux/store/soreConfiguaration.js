import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import Thunk from 'redux-thunk'

import rootReducer from "../reducers/rootReducer";
const middleware = [Thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;


