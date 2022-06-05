import {
    CREATE_POST_DEPARTMENT_START,
    CREATE_POST_DEPARTMENT_SUCCESS,
    CREATE_POST_DEPARTMENT_ERROR,
    GET_DEPARTMENT_START,
    GET_DEPARTMENT_SUCCESS,
    GET_DEPARTMENT_ERROR,

    GET_EDIT_DEPARTMENT_START,
    GET_EDIT_DEPARTMENT_SUCCESS,
    GET_EDIT_DEPARTMENT_ERROR,
    TOTAL
} from "../../actionMethod";

export const createPostDepartmentStart = (data) => {
    return {
        type: CREATE_POST_DEPARTMENT_START,
        payload: data
    };
}
export const createPostDepartmentSuccess = (users) => {
    return {
        type: CREATE_POST_DEPARTMENT_SUCCESS,
        payload: users
    };
}

export const createPostDepartmentError = (error) => {
    return {
        type: CREATE_POST_DEPARTMENT_ERROR,
        payload: error
    };
}

//Get department
export const getDepartmentStart = () => {
    return {
        type: GET_DEPARTMENT_START,
        // payload: data
    };
}
export const getDepartmentSuccess = (data) => {
    return {
        type: GET_DEPARTMENT_SUCCESS,
        payload: data
    };
}

export const getDepartmentError = (error) => {
    return {
        type: GET_DEPARTMENT_ERROR,
        payload: error
    };
}

//edit department

export const getEditDepartmentStart = (id) => {
    console.log(id, "start from start async")
    return {
        type: GET_EDIT_DEPARTMENT_START,
        payload: id
    };
}

export const getEditDepartmentSuccess = (data) => {
    console.log(data, "in edit success 67")
    return {
        type: GET_EDIT_DEPARTMENT_SUCCESS,
        payload: data,
    };
}

export const getEditDepartmentError = (error) => {
    return {
        type: GET_EDIT_DEPARTMENT_ERROR,
        payload: error
    };
}


//GET API CALLLLL
export const totalSpace = (data) => {
    return {
        type: TOTAL,
        payload: data
    }
}
