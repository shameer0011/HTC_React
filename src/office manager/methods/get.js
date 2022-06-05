
import { API } from '../constant'
import Axios from 'axios';

export const GET = async (url) => {
    console.log(url, "in get")
    try {
        if(url){

        }
        const result = await API.get(url);
        const res = result.data;
        return res;
    } catch (error) {
        console.log(error);
    }
}


export const GETwithoutToken = async (url) => {
    try {
        const result = await Axios.get(url);
        console.log(result.data);
        const res = result.data.json();
        return res;
    } catch (error) {
        console.log(error);
    }
}
