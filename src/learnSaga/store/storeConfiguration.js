import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer/rootreducer";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

// if (process.env.NODE_ENV === 'development') {
//     sagaMiddleware.push(logger)
// }
const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;