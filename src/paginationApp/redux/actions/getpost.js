import axios from "axios";
import {
    GET_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    LIKE_POST,
    FETCH_BY_SEARCH,
    START_LOADING,
    STOP_LOADING,
    FETCH_POST
} from "./actionTypes";

// export const getPost = async (dispatch) => {
//     try {
//         const data = await fetchPost;
//         return function (dispatch) {
//             return data
//             dispatch({
//                 type: GET_POST,
//                 payload: data.data
//             })
//         }

//     } catch (error) {
//         console.log(error.message)
//     }
// }

// two methods to get data from api

// export const getPost = () => {
//     return async (dispatch) => {
//         try {
//             const data = await fetchPost;
//             dispatch({
//                 type: GET_POST,
//                 payload: data.data
//             })
//         } catch (error) {
//             console.log(error.message)
//         }
//     };
// }

// export const getPost = () => {
//     return function (dispatch) {
//         return fetchPost.then(comments => {
//             dispatch({
//                 type: GET_POST,
//                 payload: comments.data
//             });
//         });
//     };
// }
// export const getPosts = () => async (dispatch) => {
//     try {
//       const { data } = await api.fetchPosts();

//       dispatch({ type: FETCH_ALL, payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        const token = localStorage.getItem("profile");
        req.headers.Authorization = `Bearer ${JSON.parse(token).token}`;
        return req;
    }
});
//Not pagination include apiResponse
//...................................

// export const getPost = () => async (dispatch) => {
//     try {
//         const { data } = await fetchPosts();
//         console.log(data, "data");
//         dispatch({ type: CREATE_POST, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// };
// with pagionation
// ....................

export const getPost = (page) => {
    const fetchPosts = API.get(`/posts?page=${page}`);
    return function (dispatch) {
        return fetchPosts.then((comments) => {
            console.log(comments, "comments");
            dispatch({ type: START_LOADING });
            dispatch({
                type: GET_POST,
                payload: comments.data,
            });
            dispatch({ type: STOP_LOADING });
        });
    };
};
//Query =>'/posts?page=1->page=1';
//Params =>'/posts/123'->123

export const fetchPostAPI = (id) => API.get(`/posts/${id}`);  //filter by id

export const getPostApiById = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await fetchPostAPI(id);
        dispatch({ type: FETCH_POST, payload: { post: data } });
        dispatch({ type: STOP_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        //   dispatch({ type: START_LOADING });
        const { data: { data } } = await fetchPostsBySearch(searchQuery);

        dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
        //   dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (data) => {
    console.log(data, "postss");
    // const article = { title: 'React POST Request Example' };
    // axios.post('https://reqres.in/api/articles', article)
    //     .then(response => this.setState({ articleId: response.data.id }));
    // const url = "http://localhost:5000/posts/data";
    const fetchPosts = API.post('/posts/data', data);
    return function (dispatch) {
        dispatch({ type: START_LOADING });
        fetchPosts.then((comments) => {
            console.log(comments, "comments");
            dispatch({
                type: CREATE_POST,
                payload: comments.data,
            });
            dispatch({ type: STOP_LOADING });

        });
    };
};

export const updatePost = (id, postdata) => {
    console.log(id, "postss");
    // const url = `http://localhost:5000/posts/${id}`;
    const fetchPosts = axios.patch(`/posts/${id}`, postdata);
    console.log(fetchPosts, "fetchPosts");
    return function (dispatch) {
        dispatch({ type: START_LOADING });
        return fetchPosts.then((comments) => {
            console.log(comments, "comments");
            dispatch({
                type: UPDATE_POST,
                payload: comments.data,
            });
            dispatch({ type: STOP_LOADING });

        });
    };
};

// export const updatePost = (id, post) => async (dispatch) => {
//     try {
//       const { data } = await api.updatePost(id, post);

//       dispatch({ type: UPDATE, payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

export const deletePost = (id) => async (dispatch) => {
    try {
        // const url = `http://localhost:5000/posts/${id}`;
        dispatch({ type: START_LOADING });
        const fetchPosts = await API.delete(`posts/${id}`, { id: id });
        dispatch({ type: DELETE_POST, payload: id });
        dispatch({ type: STOP_LOADING });
    } catch (error) {
        console.log(error);
    }
};

// diployment on heroku
// const url = `https://nodewithreactpagination.herokuapp.com/posts/${id}`

// export const deletePost = (id) => {
//     console.log(id, "postss")
//     const url = `http://localhost:5000/posts/${id}`
//     const fetchPosts = axios.delete(url, id);
//     console.log(fetchPosts, "fetchPosts")
//     return function (dispatch) {
//         // return fetchPosts.then(comments => {
//         // console.log(comments, "comments")
//         dispatch({
//             type: DELETE_POST,
//             payload: id
//         });
//         // });
//     };
// }

export const likePost = (id) => async (dispatch) => {
    try {
        // const url = `https://nodewithreactpagination.herokuapp.com/posts/${id}/likePost`;
        dispatch({ type: START_LOADING });
        const fetchPosts = await API.patch(`/posts/${id}/likePost`, { id: id });
        console.log(fetchPosts.data, "fetchPosts like api");
        dispatch({ type: LIKE_POST, payload: fetchPosts.data });
        dispatch({ type: STOP_LOADING });
    } catch (error) {
        console.log(error.message);
    }
};
// export const likePost = (id) => async (dispatch) => {
//     try {
//       const { data } = await api.likePost(id);

//       dispatch({ type: LIKE, payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
