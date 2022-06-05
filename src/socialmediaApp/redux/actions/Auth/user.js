import { LOGIN, LOGIN_SUCCESS, LOGIN_START, SIGNUP_START, SIGNUP_SUCCESS } from "../../actionTypes/authActions"


//this for google sign in
export const login = (newPost, token) => {
    return {
        type: LOGIN,
        payload: { newPost, token }

    }
}

// this for form saign up
export const signUpStart = (data, router) => {
    console.log(data, router, "in datatattat")
    //only use passing parameter to api and routing section only
    return {
        type: SIGNUP_START,
        payload: data,
        history: router
    }
}
export const signUpSuccess = (authData) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: authData
    }
}

//this for form login
export const StartLogin = (data, router) => {  //for passing parameter to api and routing section only
    return {
        type: LOGIN_START,
        payload: data,
        history: router
    }
}
export const LoginSuccess = (authData) => {
    return {
        type: LOGIN_SUCCESS,
        payload: authData,

    }
}