
import express from 'express';
import { signUp, getAllSign, signIn } from '../controllers/user/user.js';


const router = express.Router();


router.post('/signup', signUp); //first user/signin 
router.post('/signin', signIn); //second user/signin
router.get('/getAllSign', getAllSign); //first getAllSign/user


export default router;