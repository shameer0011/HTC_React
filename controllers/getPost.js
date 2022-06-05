import postMessage from "../models/postMessages.js";
import mongoose from 'mongoose';

// export const getPost = (req, res) => {
//     const ob = {
//         "title": "This is my first card",
//         "message": "Try to click on the image to see the full size",
//         "createdAt": "5/2/2020",
//         "selectedFile": "This is a image",
//         "tags": ["5"],
//         "likeCount": 0,
//         "creator": "Shameer"
//     }
//     res.send(ob)
// }

//No pagination method 
//.......................
// export const getPost = async (req, res) => {
//     try {
//         const postMessages = await postMessage.find();

//         res.status(200).json(postMessages);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// bacome pagination i will edit get post method
// ................................................
export const getPost = async (req, res) => {
    const { page } = req.query;

    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

        const total = await postMessage.countDocuments({});
        const posts = await postMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPostById = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await postMessage.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const posts = await postMessage.find({ $or: [{ title }, { tags: { $in: tags.split(',') } }] });

        res.json({ data: posts });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPost = async (req, res) => {
    console.log(req.body, "request bodyyy")
    const posts = req.body;
    try {
        const newPost = new postMessage({ ...posts, creator: req.userId, createdAt: new Date().toISOString() }); //postMessage is the model name
        console.log(newPost, "newPost")
        const post = await newPost.save();
        console.log(post, "post")
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ "message": error });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}


export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await postMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

//No authentication users

// export const likePost = async (req, res) => {
//     const { id } = req.params;
//     console.log(id, "in like comment")
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const post = await postMessage.findById(id);

//     const updatedPost = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

//     res.json(updatedPost);
// }

//when comes auth , we can update like api
export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const post = await postMessage.findById(id); //for which post like is clicked
    const index = post.likes.findIndex((id) => id === String(req.userId));
    if (index === -1) {
        post.likes.push(req.userId);
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await postMessage.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
}