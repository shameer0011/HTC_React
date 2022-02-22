import { GET_ONE_USER_COMMENT_REQUESTED, GET_ONE_USER_COMMENT_SUCCESS, GET_ONE_USER_COMMENT_FAILED } from "../actionTypes";

const initialState = {
    users: [],
    loading: false,
    error: null
};
const getOneUserCommentReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ONE_USER_COMMENT_REQUESTED:
            return { ...state, loading: true };
        case GET_ONE_USER_COMMENT_SUCCESS:
            console.log(action.payload, "in reducer comment reducer");
            return { ...state, loading: false, users: action.payload };
        case GET_ONE_USER_COMMENT_FAILED:
            console.log(action.payload, "in reducer comment reducer");
            return { ...state, loading: true, error: action.payload };
        default:
            return state;
    }
}
export default getOneUserCommentReducer;