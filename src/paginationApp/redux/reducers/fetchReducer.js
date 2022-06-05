import { GET_POST, CREATE_POST, UPDATE_POST, FETCH_POST, DELETE_POST, LIKE_POST, FETCH_BY_SEARCH, START_LOADING, STOP_LOADING } from "../actions/actionTypes";

export default (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case STOP_LOADING:
            return { ...state, isLoading: false };
        case GET_POST:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload.data };
        case FETCH_POST:
            return { ...state, post: action.payload.post };
        case LIKE_POST:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
        // case COMMENT:
        //     return {
        //         ...state,
        //         posts: state.posts.map((post) => {
        //             if (post._id == +action.payload._id) {
        //                 return action.payload;
        //             }
        //             return post;
        //         }),
        //     };
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        case UPDATE_POST:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
        case DELETE_POST:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        default:
            return state;
    }
};

