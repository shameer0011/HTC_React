import { createPost, getPost, updatePost, deletePost, likePost } from '../controllers/getPost.js';
import express from 'express';

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Hello World');
// });

router.get('/', getPost);
router.post('/data', createPost)
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;