import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../redux/rootReducer/index";
import rootSaga from "../rootSaga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}
const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

export default store;