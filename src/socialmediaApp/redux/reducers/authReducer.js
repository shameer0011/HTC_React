import { LOGIN, LOGOUT, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "../actionTypes/authActions";

const user = {
    authData: null
};

const authReducer = (state = user, action) => {
    switch (action.type) {
        case LOGIN: // google auth
        case SIGNUP_SUCCESS: // form signup auth
        case LOGIN_SUCCESS: // form login auth
            if (action) {
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