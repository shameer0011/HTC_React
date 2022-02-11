import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRouter from './routes/post.js';
import dotenv from 'dotenv'
const app = express();
dotenv.config()
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors())


// app.use('/', (req, res) => { 
//     console.log(req.body, "req.body")   
//     res.send(req.body)
// })

//for predefined start from 'posts' ,eg: http://localhost:5000/posts
app.use('/posts', postRouter)
app.use(cors({ origin: true, credentials: true }));


// const MONGODB_CONNECTION = "mongodb+srv://shameer:123@cluster0.zr5pr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const port = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server started on port ${port}`)))
    .catch(err => console.log(err));
