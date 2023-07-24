import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: true },
    allPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Posts" }],
    allAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Accounts" }],
    allAssets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assets" }],
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;