import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getOneUserCommentDataApi } from '../apis/api';

function* fetchOneUser() {
    try {
        const user = yield call(getOneUserCommentDataApi, 1);
        yield put({ type: 'GET_ONE_USER_COMMENT_SUCCESS', payload: user });
    } catch (error) {
        yield put({ type: 'GET_ONE_USER_COMMENT_FAILED', payload: error });
    }
}

function* fetchOneUserSaga() {
    yield takeLatest('GET_ONE_USER_COMMENT_REQUESTED', fetchOneUser);
}
export default fetchOneUserSaga;