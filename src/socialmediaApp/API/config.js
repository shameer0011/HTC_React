import Axios from "axios";

const API = Axios.create({ baseURL: 'http://localhost:5000' });
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        const token = localStorage.getItem("profile");
        req.headers.Authorization = `Bearer ${JSON.parse(token).token}`;
        return req;
    }
});

//form signup
export const signUp = (formData) => Axios.post('/user/signup', formData);
//form login
export const signIn = (formData) => Axios.post('/user/signin', formData);


//create posts
export const createPost = (formData) => API.post('/post/create', formData);
//fetch all posts per page
export const fetchPost = (pageNumber) => Axios.get(`/post/get-all-post?pageNumber=${pageNumber}`);
//update posts
export const updatePost = (id, formData) => API.patch(`/post/update/${id}`, formData);
//get post by id
export const getPostByIdApi = (id) => API.get(`/post/update/${id}`);
//delete post
export const deletePost = (id) => API.delete(`/post/delete/${id}`);
//search post by title and tags
export const searchPost = (searchQuery) => API.get(`/post/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
//like post
export const likePost = (id) => API.patch(`/post/${id}/likePost`, { "id": id });

// http://localhost:5000/post/62345746df58db6100cc38bf/likePost

