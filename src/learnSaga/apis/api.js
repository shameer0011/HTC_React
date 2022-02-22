import axios from 'axios';

export const getOneUserCommentDataApi = async (id) => {
    try {
        const getOneUserData = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
        return getOneUserData;
    } catch (error) {
        console.log(error);
    }
}

export const getAllUsersDataApi = async () => {
    try {
        const getAllUsersData = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        return getAllUsersData;
    } catch (error) {
        console.log(error);
    }
}

export const data = {
    "userId": 101111,
    "id": 2566,
    "title": "sunt aut facere occaecati excepturi optio",
    "body": "quia et susci"
}

export const postOneDataApi = async () => {
    try {
        const postOneData = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
        return postOneData;
    } catch (error) {
        console.log(error);
    }
}