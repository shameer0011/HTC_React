import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootreducer from '../redux/rootReducers/rootReducer'
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}
const store = createStore(rootreducer, compose(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

export default store;