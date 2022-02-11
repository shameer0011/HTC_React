import mongoose from "mongoose";

var postSchema = new mongoose.Schema({
    title: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
    selectedFile: String,
    tags: [String],
    likeCount: { type: Number, default: 0 },
    creator: String


});

const postMessage = mongoose.model('postMessageModel', postSchema);

export default postMessage;
