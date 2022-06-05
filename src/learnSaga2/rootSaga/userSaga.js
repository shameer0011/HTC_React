import { all, call, put, takeLatest, takeEvery, take, fork, delay } from 'redux-saga/effects';
import {
    loadUsersFailure, loadUsersSuccess, deleteUserSuccess,
    deleteUserFailure, createUserSuccess, createUserFailure, updateUserSuccess, updateUserFailure
} from '../redux/actions';
import * as types from '../redux/actionTypes';
import { loadUserApi, addUserApi, deleteUserApi, updateUserApi } from '../api/loadApi';

export function* onLoadUserStartAsync() {
    try {
        const users = yield call(loadUserApi);
        if (users.status === 200) {
            yield delay(500);
            yield put(loadUsersSuccess(users));
        }
    } catch (error) {
        yield put(loadUsersFailure(error));
    }
}
export function* onLoadUser() {
    yield takeLatest(types.LOAD_USERS_START, onLoadUserStartAsync);
}



export function* onCreateUserStartAsync(user) {
    try {
        const users = yield call(addUserApi, user.payload);
        if (users.status === 201) {
            yield put(createUserSuccess());
        }
    } catch (error) {
        yield put(createUserFailure(error));
    }
}

export function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}


export function* onDeleteUserStartAsync(id) {
    try {
        console.log(id, "delete user statrt actionssss (3)")
        const users = yield call(deleteUserApi, id);
        console.log(users, "users (2)")
        if (users.status === 200) {
            yield put(deleteUserSuccess(id));
        }
    } catch (error) {
        yield put(deleteUserFailure(error));
    }
}

export function* onDeleteUser() {
    while (true) {
        const { payload } = yield take(types.DELETE_USER_START);
        yield call(onDeleteUserStartAsync, payload);
    }
}

export function* onUpdateUserStartAsync({ payload }) {

    console.log(payload.payload.id, payload.payload.details, "payload (4)")
    const { id } = payload.payload;
    console.log(id, "id (5)")
    const { details } = payload.payload;
    console.log(details, "details (6)")
    try {
        const users = yield call(updateUserApi, id, details);
        console.log(users, "users (2)")
        if (users.status === 200) {
            yield put(updateUserSuccess());
        }
    } catch (error) {
        yield put(updateUserFailure(error.response.data));

    }

}

export function* onUpdateUser() {
    yield takeEvery(types.UPDATE_USER_START, onUpdateUserStartAsync);
}

export const userSagas = [fork(onLoadUser), fork(onCreateUser), fork(onDeleteUser), fork(onUpdateUser)];