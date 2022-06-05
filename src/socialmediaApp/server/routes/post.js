
import express from 'express';

import { createPost, getAllPost, updatePost, updatePostById, deletePost, getPostsBySearch, likePost } from '../controllers/post/post.js';
import auth from '../middleware/auth.js';
const router = express.Router();


router.post('/create', auth, createPost);
router.get('/get-all-post', getAllPost)
router.get('/update/:id', auth, updatePostById)
router.patch('/update/:id', auth, updatePost);
router.delete('/delete/:id', auth, deletePost);
router.get('/search', auth, getPostsBySearch);
router.patch('/:id/likePost', auth, likePost)
export default router;