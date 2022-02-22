import axios from "axios";
import { createPostApi } from "../../core/apis/fetchPost";
import { CREATE_POST } from "./actionTypes";

// export const createPostMethod = () => {

//     return async (dispatch) => {
//         try {
//             const data = await createPostApi();
//             console.log(data, "dattaa")

//             dispatch({
//                 type: CREATE_POST,
//                 payload: data.data
//             })
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
// }


// export const createPostMethod = (posts) => {
//     console.log(posts, "posts")
//     const url = "http://localhost:5000/data/posts"
//     const fetchPost = axios.get(url)
//     return function (dispatch) {
//         return fetchPost.then(comments => {
//             dispatch({
//                 type: CREATE_POST,
//                 payload: comments.data
//             });
//         });
//     };
// }