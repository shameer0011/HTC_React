import { GET__TOTAL_USERS_FAILED, GET__TOTAL_USERS_REQUESTED, GET__TOTAL_USERS_SUCCESS } from "../actionTypes";

const initialState = {
    users: [],
    loading: false,
    error: null
};
const getallUserReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET__TOTAL_USERS_REQUESTED:
            return { ...state, loading: true };
        case GET__TOTAL_USERS_SUCCESS:
            return { ...state, loading: false, users: action.payload };
        case GET__TOTAL_USERS_FAILED:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
export default getallUserReducer;