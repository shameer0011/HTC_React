import { createPost, getPost, updatePost, deletePost, likePost, getPostsBySearch, getPostById } from '../controllers/getPost.js';
import express from 'express';
import auth from '../middleware/auth.js';

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Hello World');
// });

router.get('/', getPost);
router.get('/search', getPostsBySearch);
router.get('/:id', getPostById)
router.post('/data', createPost)
router.patch('/:id', updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;