import { all } from "redux-saga/effects";
import { deptSagas } from "./department/deptSaga";

export default function* rootSaga() {
    yield all([
        ...deptSagas
    ]);
}