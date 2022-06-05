import { takeLatest, put, call, fork } from 'redux-saga/effects';
import * as types from '../../redux/actionTypes/postAction';
import { fetchPost, createPost, updatePost, getPostByIdApi, deletePost, searchPost, likePost } from '../../API/config';
import {
    fetchPostFailure,
    fetchPostSuccess,
    createPostSuccess,
    createPostFailure,
    updatePostSuccess,
    updatePostFailure,
    getPostByIdSuccess,
    getPostByIdFailure,
    deletePostSuccess,
    deletePostFailure,
    searchPostSuccess,
    searchPostFailure,
    likePostSuccess,
    likePostFailure,
    fetchPostStart

} from '../../redux/actions/post/post';

// fetch all post
export function* onFetchPostStartAsync(pageNumber) {
    try {
        const users = yield call(fetchPost, pageNumber.payload);
        if (users.status === 200) {
            const { data } = users;
            yield put(fetchPostSuccess(data.data, data.numberOfPages, data.currentPage));
        }
    } catch (error) {
        yield put(fetchPostFailure(error));
        console.log(error)
    }
}
export function* onFetchPost() {
    yield takeLatest(types.FETCH_POST_START, onFetchPostStartAsync);
}

// create one post
export function* onCreatePostStartAsync(data) {
    try {
        const users = yield call(createPost, data.payload);
        if (users.status === 201) {
            yield put(createPostSuccess());
            yield put(fetchPostStart());
        }
    } catch (error) {
        yield put(createPostFailure(error));
        console.log(error)
    }
}
export function* onCreatePost() {
    yield takeLatest(types.CREATE_POST_START, onCreatePostStartAsync);
}

//get post by id

export function* onUpdateByIdPostStartAsync(id) {
    try {
        const users = yield call(getPostByIdApi, id.payload);
        if (users.status === 200) {
            const { data } = users;
            yield put(getPostByIdSuccess(data));
        }
    } catch (error) {
        yield put(getPostByIdFailure(error));
        console.log(error)
    }
}
export function* onGetPostById() {
    yield takeLatest(types.GET_POST_BY_ID_START, onUpdateByIdPostStartAsync);
}



// create one post
export function* onUpdatePostStartAsync(data) {
    try {
        const users = yield call(updatePost, data.payload, data.data);
        if (users.status === 200) {
            yield put(updatePostSuccess());
            yield put(fetchPostStart());
        }
    } catch (error) {
        yield put(updatePostFailure(error));
        console.log(error)
    }
}
export function* onUpdatePost() {
    yield takeLatest(types.UPDATE_POST_START, onUpdatePostStartAsync);
}

//delete post
export function* onDeletePostStartAsync(id) {
    try {
        const users = yield call(deletePost, id.payload);
        if (users.status === 200) {
            yield put(deletePostSuccess());
            yield put(fetchPostStart());
        }
    } catch (error) {
        yield put(deletePostFailure(error));
        console.log(error)
    }
}
export function* onDeletePost() {
    yield takeLatest(types.DELETE_POST_START, onDeletePostStartAsync);
}

//search post 
export function* onSearchPostStartAsync(data) {
    try {
        const users = yield call(searchPost, data.payload);
        if (users.status === 200) {
            const { data } = users;
            yield put(searchPostSuccess(data.data));
        }
    } catch (error) {
        yield put(searchPostFailure(error));
        console.log(error)
    }
}
export function* onSearchPost() {
    yield takeLatest(types.SEARCH_POST_START, onSearchPostStartAsync);
}

//like post
export function* onLikePostStartAsync(id) {
    try {
        const post = yield call(likePost, id);
        const { data } = post;
        if (post.status === 200) {
            yield put(likePostSuccess());
            yield put(fetchPostStart());
        }
    } catch (error) {
        yield put(likePostFailure(error));
    }
}
export function* onLikePost() {
    yield takeLatest(types.LIKE_POST_START, onLikePostStartAsync);
}

export const postSagas = [fork(onFetchPost), fork(onCreatePost), fork(onGetPostById), fork(onUpdatePost), fork(onDeletePost), fork(onSearchPost), fork(onLikePost)];