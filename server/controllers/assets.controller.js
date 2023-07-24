import Assets from "../mongodb/models/assets.js";
import User from "../mongodb/models/user.js";
import mongoose from "mongoose";
const getAssetDetails = async (req, res) => {
    try {
        const assets = await Assets.find({}).limit(req.query._end)
        res.status(200).json(assets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createAsset = async (req, res) => {
    try {

        const { scrip, balance, boughtat, email } = req.body;
        //Start a new session
        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ email }).session(session);

        if (!user) throw new Error("User not found!");

        const newAsset = await Assets.create({
            scrip, balance, boughtat, creator: user._id
        });

        user.allAssets.push(newAsset._id);
        await user.save({ session });

        await session.commitTransaction();

        res.status(200).json({ message: "Asset created successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export {
    getAssetDetails,
    createAsset
}