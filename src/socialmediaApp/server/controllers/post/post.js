import mongoose from 'mongoose';
import postMessage from '../../models/post/post.js'

export const createPost = async (req, res) => {
    console.log(req.body, "request bodyyy")
    const posts = req.body;
    try {
        const newPost = new postMessage
            ({
                ...posts, creator: req.userId,
                createdAt: new Date().toISOString()
            }); //postMessage is the model name
        console.log(newPost, "newPost")
        const post = await newPost.save();
        console.log(post, "post")
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ "message": error });
    }
}

// export const getAllPost = async (req, res) => {
//     try {
//         const postMessages = await postMessage.find();

//         res.status(200).json(postMessages);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// Include pagination
export const getAllPost = async (req, res) => {
    const { pageNumber } = req.query;
    try {
        const LIMIT = 5;
        const startIndex = (Number(pageNumber) - 1) * LIMIT; // get the starting index of every page

        const total = await postMessage.countDocuments({});
        const posts = await postMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(pageNumber), numberOfPages: Math.ceil(total / LIMIT) });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updatePostById = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await postMessage.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
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

    await postMessage.findByIdAndDelete(id);

    res.json({ message: `Post with id: ${id} deleted` });
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

export const likePost = async (req, res) => {
    const { payload } = req.body.id;
    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }

    if (!mongoose.Types.ObjectId.isValid(payload)) return res.status(404).send(`No post with id: ${payload}`);

    const post = await postMessage.findById(payload);
    const index = post.likes.findIndex((id) => id === String(req.userId));
    if (index === -1) {
        post.likes.push(req.userId);
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await postMessage.findByIdAndUpdate(payload, post, { new: true });
    res.status(200).json(updatedPost);
}
