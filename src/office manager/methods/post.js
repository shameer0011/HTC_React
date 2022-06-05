import Axios from "axios";
import { API } from '../constant';

export const POST = async (url, payload) => {
    var authOptions = {
        method: 'post',
        url: url,
        data: payload,
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `bearer ${token}`,
        },
        json: true
    };
    try {
        const result = await Axios(authOptions);
        return result.data;
    } catch (error) {
        console.log(error);
    }

}
export const POSTwithToken = async (url, payload) => {
    var authOptions = {
        method: 'post',
        url: url,
        data: payload,
        headers: {
            // 'Content-Type': 'application/json',
            // 'Authorization': `bearer ${token}`,
            'Content-type': 'multipart/form-data'
        },
        json: true
    };
    try {
        // const result = await API.post(authOptions);
        const result = await API.post(url, payload);
        console.log(result, "result")
        return result;
    } catch (error) {
        console.log(error);
    }

} 