import { POST_DATA_REQUESTED, POST_DATA_SUCCESS, POST_DATA_FAILED } from "../actionTypes";

const initialState = {
    users: [],
    loading: false,
    error: null
};
const postOneDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case POST_DATA_REQUESTED:
            return { ...state, loading: true };
        case POST_DATA_SUCCESS:
            console.log(action.payload, "in reducer comment reducer");
            return { ...state, loading: false, users: action.payload };
        case POST_DATA_FAILED:
            console.log(action.payload, "in reducer comment reducer");
            return { ...state, loading: true, error: action.payload };
        default:
            return state;
    }
}
export default postOneDataReducer;