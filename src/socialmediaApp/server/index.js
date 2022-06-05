import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.js'
import postRouter from './routes/post.js'

const app = express();
// dotenv.config()
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors())



// user/signin
app.use('/user', userRouter)
app.use('/post', postRouter) //first user/signin==>first calles index.js url then router url
const port = 5000;
// app.listen(port, () => console.log(`Server started on port ${port}`))
app.use(cors({ origin: true, credentials: true }));

const MONGODB_CONNECTION = "mongodb+srv://shameer__smr:1234@cluster0.syi8z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(MONGODB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server started on port ${port}`)))
    .catch(err => console.log(err));

// mongoose.set('useFindAndModify', false);
//mongodb connection link :https://cloud.mongodb.com/v2/62244bf3131f576a8faa5d9f#clusters
//SHAMEER'S ORG - 2022-02-28 - ATLAS ORGANIZATION > SOCIAL MEDIA APP
//username : shameer__smr
//password : 1234