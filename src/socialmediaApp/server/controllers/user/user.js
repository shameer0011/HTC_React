import UserModel from '../../models/user/user.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const secret = 'test';

export const signUp = async (req, res) => {

    const posts = req.body;
    const { email, password, firstName, lastName } = posts;

    try {
        const oldUser = await UserModel.findOne({ email });

        if (oldUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const newPost = new UserModel({ ...posts, email: email, name: `${firstName} ${lastName}`, password: hashedPassword });

        const token = jwt.sign({ email: newPost.email, id: newPost._id }, secret, { expiresIn: "1h" });

        res.status(201).json({ newPost, token });

    } catch (error) {

        res.status(500).json({ "message": error });
    }

};
export const signIn = async (req, res) => {

    try {
        const posts = req.body;
        const { email, password } = posts;

        const user = await UserModel.findOne({ email: email });

        if (!user) {
            res.status(404).json({ "message": "user not found" });

            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            console.log(isPasswordCorrect, "isPasswordCorrect")
            if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        } else {

            const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "1h" }); // creating toke for auth

            res.status(200).json({ user, token });
        }

    } catch (error) {

        res.status(500).json({ "message": error });
    }
}

export const getAllSign = async (req, res) => {
    try {
        const getTableAllUser = await UserModel.find({});
        console.log(getTableAllUser, "getTableAllUser")
        res.status(200).json(getTableAllUser);
    } catch (error) {
        res.status(500).json({ "message": error });
    }
}