import Posts from "../mongodb/models/posts.js";
import User from "../mongodb/models/user.js"
import mongoose from "mongoose";
import * as dotenv from "dotenv";

import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    }
);


const getAllPosts = async (req, res) => {
    const { _end, _order, _start, title_like = "" } = req.query;
    const query = {};

    if (title_like) {
        query.title = { $regex: title_like, $options: "i" }
    }
    try {
        const count = await Posts.countDocuments({ query });

        const posts = await Posts.find(query).limit(_end).skip(_start);

        res.header('x-total-count', count);
        res.header('Access-Control-Expose-Headers', 'x-total-count')

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};
const getPostsDetail = async (req, res) => {
    const { id } = req.params;
    const postExists = await Posts.findOne({ _id: id }).populate('creator');

    if (postExists) {
        res.status(200).json(postExists)
    }
    else {
        res.status(404).json({ message: "Post not found!" })
    }

};

const createPosts = async (req, res) => {
    try {
        const { title, description, photo, email } = req.body;
        // start a new session 
        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ email }).session(session);
        if (!user) throw new Error("User not found");

        const photoUrl = await cloudinary.uploader.upload(photo);
        const newPost = await Posts.create({
            title, description, photo: photoUrl.url, creator: user._id
        });

        user.allPosts.push(newPost._id);
        await user.save({ session });

        await session.commitTransaction();
        res.status(200).json({ message: "Post created successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};

const updatePosts = async (req, res) => { };
const deletePosts = async (req, res) => { };

export {
    getAllPosts, getPostsDetail, createPosts, updatePosts, deletePosts
}