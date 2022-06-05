import mongoose from "mongoose";

var postSchema = new mongoose.Schema({
    title: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
    name: String,
    selectedFile: String,
    tags: [String],
    likes: { type: [String], default: [] },
    creator: String

});

const postMessage = mongoose.model('postMessageModel', postSchema);

export default postMessage;