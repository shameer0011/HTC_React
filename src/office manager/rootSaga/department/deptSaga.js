import { all, call, put, takeLatest, takeEvery, take, fork, delay } from 'redux-saga/effects';
import * as types from '../../redux/actionMethod';
import { departmentCreateApi, departmentGetApi, getDepartmentEditeApi } from '../../apis/department/depApi';
import {
    createPostDepartmentError,
    createPostDepartmentSuccess,
    getDepartmentError,
    getDepartmentSuccess,
    getEditDepartmentSuccess,
    getEditDepartmentError,
} from '../../redux/actions/department/post.js'

//ON CREATE DEPARTMENT
export function* onCreateDepartmentStartAsync(details) {
    try {
        const message = yield call(departmentCreateApi, details.payload);
        // delay(500)
        yield put(createPostDepartmentSuccess(message));

    } catch (error) {
        yield put(createPostDepartmentError(error));
    }
}

export function* onCreateDepartment() {
    yield takeLatest(types.CREATE_POST_DEPARTMENT_START, onCreateDepartmentStartAsync);
}


//GET TOTAL DEPARTMENT
export function* onGetDepartmentStartAsync() {
    try {
        const message = yield call(departmentGetApi);
        delay(500)
        yield put(getDepartmentSuccess(message));

    } catch (error) {
        yield put(getDepartmentError(error));
    }
}

export function* onGetDepartment() {
    yield takeLatest(types.GET_DEPARTMENT_START, onGetDepartmentStartAsync);
}



export function* onGetEditDepartmentStartAsync({ payload }) {
    console.log(payload, "payload 49")
    if (typeof (payload) === 'number') {
        try {
            const message = yield call(getDepartmentEditeApi, payload);
            console.log(message, "message in saga")
            // delay(500)
            if (typeof (payload) === 'number') {
                yield put(getEditDepartmentSuccess(message));
            }
        } catch (error) {
            yield put(getEditDepartmentError(error));
        }
    }
}

export function* onGetEditDepartment() {
    yield takeLatest(types.GET_EDIT_DEPARTMENT_START, onGetEditDepartmentStartAsync);
}





export const deptSagas = [fork(onCreateDepartment), fork(onGetDepartment), fork(onGetEditDepartment)];
