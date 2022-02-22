import axios from 'axios';
const url = "http://localhost:5000/data/posts"

export const fetchPost = () => axios.get(url)

export const createPostApi = (params) => axios.post(url, params)
