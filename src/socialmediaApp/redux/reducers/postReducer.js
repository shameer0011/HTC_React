import {
    FETCH_POST_START, FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE, LOADING_START, LOADING_SUCCESS,
    LOADING_FAILURE,
    CREATE_POST_START,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE,
    UPDATE_POST_START,
    GET_POST_BY_ID_START,
    GET_POST_BY_ID_SUCCESS,
    GET_POST_BY_ID_FAILURE,
    DELETE_POST_FAILURE,
    DELETE_POST_SUCCESS,
    DELETE_POST_START,
    SEARCH_POST_START,
    SEARCH_POST_SUCCESS,
    SEARCH_POST_FAILURE,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAILURE,
    LIKE_POST_START

} from "../actionTypes/postAction";

const postDetails = {
    post: [],
    loading: false,
    error: null,
};
const postReducer = (state = postDetails, action) => {
    switch (action.type) {
        case FETCH_POST_START:
        case CREATE_POST_START:
        case LOADING_START:
        case UPDATE_POST_START:
        case GET_POST_BY_ID_START:
        case DELETE_POST_START:
        case SEARCH_POST_START:
        case LIKE_POST_START:

            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_POST_SUCCESS:
        case LOADING_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload,
                currentPage: action.currentPage,
                numberOfPages: action.numberOfPages
            };
        case SEARCH_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload,
            }
        case GET_POST_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                update: action.payload
            };
        case CREATE_POST_SUCCESS:
        case UPDATE_POST_SUCCESS:
        case DELETE_POST_SUCCESS:
        case LIKE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case FETCH_POST_FAILURE:
        case LOADING_FAILURE:
        case CREATE_POST_FAILURE:
        case UPDATE_POST_FAILURE:
        case GET_POST_BY_ID_FAILURE:
        case DELETE_POST_FAILURE:
        case SEARCH_POST_FAILURE:
        case LIKE_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
export default postReducer;