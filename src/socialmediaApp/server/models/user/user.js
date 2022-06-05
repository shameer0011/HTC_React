import mongoose from "mongoose";

var userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    id: { type: String },
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;