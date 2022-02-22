import { call, put, takeLatest } from "redux-saga/effects";
import { POST_DATA_FAILED, POST_DATA_REQUESTED, POST_DATA_SUCCESS } from "../actionTypes";
import { postOneDataApi } from "../apis/api";

function* postOneData(action) {
    try {
        const response = yield call(postOneDataApi);
        yield put({ type: POST_DATA_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: POST_DATA_FAILED, payload: error });
    }
}

function* watchPostOneData() {
    yield takeLatest(POST_DATA_REQUESTED, postOneData);
}
export default watchPostOneData;