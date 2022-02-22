import { all } from "redux-saga/effects";

import fetchOneUserSaga from './fetchOneUserCommentData'
import watchGetAllData from "./getAllUserData";
import watchPostOneData from "./postOneData";

export default function* rootSaga() {
    yield all([
        fetchOneUserSaga(),
        watchGetAllData(),
        watchPostOneData(),
    ]);
}