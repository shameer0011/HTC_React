import { GET_ONE_USER_COMMENT_REQUESTED, GET__TOTAL_USERS_REQUESTED, POST_DATA_REQUESTED } from "./actionTypes";


export const getOneUserCommentRequested = (id) => {
    return {
        type: GET_ONE_USER_COMMENT_REQUESTED,
        payload: id
    };
};

export const getAllUsersDataRequested = () => {
    return {
        type: GET__TOTAL_USERS_REQUESTED
    };
}


export const postDataRequested = (data) => {
    return {
        type: POST_DATA_REQUESTED,
        payload: data
    };
}