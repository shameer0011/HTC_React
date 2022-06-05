
import axios from 'axios';
import { LOGIN } from '../actionTypes';



const API = axios.create({ baseURL: 'http://localhost:5000' });


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);





export const signin = (formData, router) => async (dispatch) => {
    try {
        const { data } = await signIn(formData);
        dispatch({ type: LOGIN, payload: data });
        router.push('/');
    } catch (error) {
        console.log(error);
    }
};



export const signup = (formData, router) => async (dispatch) => {
    try {
        const { data } = await signUp(formData);
        console.log(data, "data")
        dispatch({ type: LOGIN, payload: data });
        router.push('/');
    } catch (error) {
        console.log(error);
    }
};
