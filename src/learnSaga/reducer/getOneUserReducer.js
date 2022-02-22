const initialState = {
    users: "",
    loading: false,
};
const getOneUserReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_ONE_USER_REQUESTED":
            return { ...state, loading: true };
        case "GET_ONE_USER_SUCCESS":
            console.log(action.payload, "in reducer commentssss");
            return { ...state, loading: false, users: [action.payload] };
        default:
            return state;
    }
}
export default getOneUserReducer;