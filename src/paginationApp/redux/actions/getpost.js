import axios from "axios";
import { fetchPost } from "../../core/apis/fetchPost";
import { GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from "./actionTypes";

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

export const getPost = () => {
    const url = "https://nodewithreactpagination.herokuapp.com/posts"
    const fetchPosts = axios.get(url)
    return function (dispatch) {
        return fetchPosts.then(comments => {
            console.log(comments, "comments")
            dispatch({
                type: GET_POST,
                payload: comments.data
            });
        });
    };
}

export const createPost = (data) => {
    console.log(data, "postss")
    // const article = { title: 'React POST Request Example' };
    // axios.post('https://reqres.in/api/articles', article)
    //     .then(response => this.setState({ articleId: response.data.id }));
    const url = "https://nodewithreactpagination.herokuapp.com/posts/data"
    const fetchPosts = axios.post(url, data)
    return function (dispatch) {
        return fetchPosts.then(comments => {
            console.log(comments, "comments")
            dispatch({
                type: CREATE_POST,
                payload: comments.data
            });
        });
    };
}

export const updatePost = (id, postdata) => {
    console.log(id, "postss")
    const url = `https://nodewithreactpagination.herokuapp.com/posts/${id}`
    const fetchPosts = axios.patch(url, postdata)
    return function (dispatch) {
        return fetchPosts.then(comments => {
            console.log(comments, "comments")
            dispatch({
                type: UPDATE_POST,
                payload: comments.data
            });
        });
    };
}


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
        const url = `https://nodewithreactpagination.herokuapp.com/posts/${id}`
        const fetchPosts = await axios.delete(url, { id: id });

        dispatch({ type: DELETE_POST, payload: id });
    } catch (error) {
        console.log(error);
    }
};

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
        const url = `https://nodewithreactpagination.herokuapp.com/posts/${id}/likePost`
        const fetchPosts= await axios.patch(url,{id:id});
        dispatch({ type: LIKE_POST, payload: fetchPosts.data });
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
