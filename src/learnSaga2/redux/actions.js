import * as types from './actionTypes';

//firstly fetch the json-server total data
export const loadUserStart = () => {
    return {
        type: types.LOAD_USERS_START
    }
}
export const loadUsersSuccess = (users) => {
    return {
        type: types.LOAD_USERS_SUCCESS,
        payload: users
    }
}
export const loadUsersFailure = (error) => {
    return {
        type: types.LOAD_USERS_ERROR,
        payload: error
    }
}


//secondly add data to the json-server 
export const createUserStart = (user) => { // for passing to api
    console.log(user, "user actionssss1")
    return {
        type: types.CREATE_USER_START,
        payload: user
    }
}
export const createUserSuccess = () => {
    return {
        type: types.CREATE_USER_SUCCESS,
    }
}
export const createUserFailure = (error) => {
    return {
        type: types.CREATE_USER_ERROR,
        payload: error
    }
}

//thirdly delete data from the json-server

export const deleteUserStart = (id) => {
    console.log(id, "delete user statrt actionssss (1)")
    return {
        type: types.DELETE_USER_START,
        payload: id
    }
}
export const deleteUserSuccess = (id) => {
    return {
        type: types.DELETE_USER_SUCCESS,
        payload: id
    }
}
export const deleteUserFailure = (error) => {
    return {
        type: types.DELETE_USER_ERROR,
        payload: error
    }
}

//forthly update data from the json-server

export const updateUserStart = (user) => {
    console.log(user, "update user statrt actionssss (1)")
    return {
        type: types.UPDATE_USER_START,
        payload: user
    }
}
export const updateUserSuccess = () => {
    return {
        type: types.UPDATE_USER_SUCCESS,
    }
}
export const updateUserFailure = (error) => {
    return {
        type: types.UPDATE_USER_ERROR,
        payload: error
    }
}

