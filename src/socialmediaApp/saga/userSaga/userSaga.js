import * as types from '../../redux/actionTypes/authActions';
import { takeLatest, put, call, fork } from 'redux-saga/effects';
import { signIn, signUp } from '../../API/config';
import { signUpSuccess, LoginSuccess } from '../../redux/actions/Auth/user';
//for signup fprm 
export function* onCreateUserStartAsync(user) {

    try {
        const users = yield call(signUp, user.payload);
        if (users.status === 201) {
            const { newPost, token } = users.data;
            const authData = { token: token, newPost: newPost }
            yield put(signUpSuccess(authData));
            user.history.push('/')
        }
    } catch (error) {
        // yield put(createUserFailure(error));
        console.log(error)
    }
}
export function* onUserSignUp() {
    yield takeLatest(types.SIGNUP_START, onCreateUserStartAsync);
}

// //for login form 
export function* onLoginUserStartAsync(user) {
    console.log(user, "in user login saga")
    // user.history.push('/')
    try {
        const users = yield call(signIn, user.payload);
        console.log(users, "usersssss")
        if (users.status === 200) {
            const { user, token } = users.data;
            const authData = { token: token, newPost: user }
            yield put(LoginSuccess(authData));

            // user.history.push('/')//this is not woking
        }
        if (users) {
            user.history.push('/')
        }
    } catch (error) {
        // yield put(createUserFailure(error));
        console.log(error)
    }
}
export function* onUserSignin() {
    yield takeLatest(types.LOGIN_START, onLoginUserStartAsync);
}

export const userSagas = [fork(onUserSignUp), fork(onUserSignin)];
