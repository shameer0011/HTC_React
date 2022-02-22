import { LOGIN, LOGOUT } from "../actions/actionTypes";

const user = {
    authData: null
};

const authReducer = (state = user, action) => {
    switch (action.type) {
        case LOGIN:
            if (action) {
                console.log(action.payload, "action in login action")
                localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
                return { ...state, authData: action?.payload }
            }
            break
        case LOGOUT:
            localStorage.removeItem("profile");
            return { ...state, authData: null }

        default:
            return state;
    }
}
export default authReducer;  