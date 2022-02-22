import { GET_POST, CREATE_POST, UPDATE_POST, DELETE_UPDATE, DELETE_POST, LIKE_POST } from "../actions/actionTypes";

const totalLists = [];

const fetchReducer = (state = totalLists, action) => {
    switch (action.type) {
        case GET_POST:
            if (action) {
                return action.payload
            }
            break
        case CREATE_POST:
            if (action) {
                return [...state, action.payload]
            }
            break
        case UPDATE_POST:
            if (action) {
                // console.log(state, "state in update action")
                // console.log(action.payload, "action in update action")
                // return [...state.filter(post => post._id !== action.payload._id), action.payload]
                return state.map(post => post._id === action.payload._id ? action.payload : post)
            }
            break
        case DELETE_POST:
            if (action) {
                console.log(action.payload, "action in delete action")
                return state.filter((post) => post._id !== action.payload) //returns an array of posts that do not match the id of the post that was deleted))
            }
            break
        case LIKE_POST:
            if (action) {
                console.log(action.payload, "action in delete action")
                return state.map(post => post._id === action.payload._id ? action.payload : post) //returns an array of posts that do not match the id of the post that was deleted))
            }
            break
        default:
            return state;
    }
}
export default fetchReducer;  