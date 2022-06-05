import axios from "axios";

export const loadUserApi = async () => await axios.get('http://localhost:4000/users');
export const addUserApi = async (users) => await axios.post('http://localhost:4000/users', users)
export const deleteUserApi = async (usersId) => await axios.delete(`http://localhost:4000/users/${usersId}`)
export const updateUserApi = async (usersId, userInfo) => await axios.put(`http://localhost:4000/users/${usersId}`, userInfo)