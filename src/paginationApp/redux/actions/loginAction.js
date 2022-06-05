import { LOGIN } from "./actionTypes"

export const login = (user, token) => {
    return {
        type: LOGIN,
        payload: { user, token }

    }
}
//This action is email using authentication