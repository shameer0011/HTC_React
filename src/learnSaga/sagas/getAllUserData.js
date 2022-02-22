import { call, put, takeLatest } from "redux-saga/effects";
import { GET__TOTAL_USERS_FAILED, GET__TOTAL_USERS_REQUESTED, GET__TOTAL_USERS_SUCCESS } from "../actionTypes";
import { getAllUsersDataApi } from "../apis/api";

function* getAllData() {
    try {
        const apiResponse = yield call(getAllUsersDataApi);
        yield put({ type: GET__TOTAL_USERS_SUCCESS, payload: apiResponse });
    } catch (error) {
        console.log(error);
        yield put({ type: GET__TOTAL_USERS_FAILED, payload: error });
    }
}

function* watchGetAllData() {
    yield takeLatest(GET__TOTAL_USERS_REQUESTED, getAllData);
}
export default watchGetAllData;