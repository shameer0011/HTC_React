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


export const getPost = async (req, res) => {
    try {
        const postMessages = await postMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    try {
        const newPost = new postMessage(req.body); //postMessage is the model name
        const post = await newPost.save();
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

export const likePost = async (req, res) => {
    const { id } = req.params;
    console.log(id, "in like comment")
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const post = await postMessage.findById(id);

    const updatedPost = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedPost);
}