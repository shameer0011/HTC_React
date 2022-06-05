import Axios from 'axios';
export const baseUrl = 'https://officemanager.altd.in/api';

export const API = Axios.create({ baseURL: 'https://officemanager.altd.in/api' });
API.interceptors.request.use((req) => {
    if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        req.headers.Authorization = `Bearer ${token}`;
        return req;
    }
});
// export const getDeptList = () => API.get('/backend/departments');