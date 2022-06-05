//fetch post all
import * as types from '../../actionTypes/postAction'
export const fetchPostStart = (pageNumber) => {
    console.log(pageNumber, "pageNumber action fetch start")
    //only use passing parameter to api and routing section only
    return {
        type: types.FETCH_POST_START,
        payload: pageNumber
    }
}
export const fetchPostSuccess = (authData, numberOfPages, currentPage) => {
    return {
        type: types.FETCH_POST_SUCCESS,
        payload: authData,
        numberOfPages: numberOfPages,
        currentPage: currentPage
    }
}

export const fetchPostFailure = (error) => {
    return {
        type: types.DELETE_POST_FAILURE,
        payload: error
    }
}

//loading sections
export const startLoading = () => {
    return {
        type: types.LOADING_START
    }
}
export const loadingSuccess = () => {
    return {
        type: types.LOADING_SUCCESS,

    }
}
export const loadingFailure = () => {
    return {
        type: types.LOADING_FAILURE,
    }
}

//create post
export const createPostStart = (data) => {
    //only use passing parameter to api and routing section only
    return {
        type: types.CREATE_POST_START,
        payload: data
    }
}
export const createPostSuccess = () => {
    return {
        type: types.CREATE_POST_SUCCESS,

    }
}
export const createPostFailure = (error) => {
    return {
        type: types.CREATE_POST_FAILURE,
        payload: error
    }
}

//update post
export const updatePostStart = (id, data) => {
    //only use passing parameter to api and routing section only
    return {
        type: types.UPDATE_POST_START,
        payload: id, data
    }
}
export const updatePostSuccess = (id) => {
    return {
        type: types.UPDATE_POST_SUCCESS,
        payload: id

    }
}
export const updatePostFailure = (error) => {
    return {
        type: types.UPDATE_POST_FAILURE,
        payload: error
    }
}


//get one post Details
export const getPostByIdStart = (id) => {
    //only use passing parameter to api and routing section only
    return {
        type: types.GET_POST_BY_ID_START,
        payload: id
    }
}
export const getPostByIdSuccess = (data) => {
    return {
        type: types.GET_POST_BY_ID_SUCCESS,
        payload: data
    }
}
export const getPostByIdFailure = (error) => {
    return {
        type: types.GET_POST_BY_ID_FAILURE,
        payload: error
    }
}


// delete post
export const deletePostStart = (id) => {
    //only use passing parameter to api and routing section only
    return {
        type: types.DELETE_POST_START,
        payload: id
    }
}
export const deletePostSuccess = (id) => {
    return {
        type: types.DELETE_POST_SUCCESS,
        payload: id
    }
}
export const deletePostFailure = (error) => {
    return {
        type: types.DELETE_POST_FAILURE,
        payload: error
    }
}

//search post
export const searchPostStart = (data) => {
    return {
        type: types.SEARCH_POST_START,
        payload: data
    }
}
export const searchPostSuccess = (data) => {
    return {
        type: types.SEARCH_POST_SUCCESS,
        payload: data
    }
}
export const searchPostFailure = (error) => {
    return {
        type: types.SEARCH_POST_FAILURE,
        payload: error
    }
}
//like post 
export const likePostStart = (id) => {
    return {
        type: types.LIKE_POST_START,
        payload: id
    }
}
export const likePostSuccess = (id) => {
    return {
        type: types.LIKE_POST_SUCCESS,
        payload: id
    }
}

export const likePostFailure = (error) => {
    return {
        type: types.LIKE_POST_FAILURE,
        payload: error
    }
}


