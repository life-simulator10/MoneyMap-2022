import mongoose from "mongoose";

const AssetsSchema = new mongoose.Schema({
    scrip: { type: String, required: true },
    balance: { type: Number, required: true },
    boughtat: { type: Number, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

const assetModel = mongoose.model("Assets", AssetsSchema);

export default assetModel;