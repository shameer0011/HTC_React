import { all } from "redux-saga/effects";
import { userSagas } from "../userSaga/userSaga";
import { postSagas } from "../post/postSaga";
export default function* rootSaga() {
    yield all([
        ...userSagas,
        ...postSagas,

    ]);
}