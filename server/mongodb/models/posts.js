import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

})

const postsModel = mongoose.model("Posts", PostsSchema);

export default postsModel;