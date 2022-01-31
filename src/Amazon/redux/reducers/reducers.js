import * as types from '../actions/actionTypes'
const initialState = {
    loading: false,
    basket: [],
    error: null,
    user: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
            return {
                ...state,
                loading: true
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case types.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                user: null
            }
        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
        case types.LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}
export default authReducer;