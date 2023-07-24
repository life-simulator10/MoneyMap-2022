import Accounts from "../mongodb/models/accounts.js";
import User from "../mongodb/models/user.js";
import mongoose from "mongoose";


const getAccountDetails = async (req, res) => {
    try {
        const accounts = await Accounts.find({}).limit(req.query._end)
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createAccount = async (req, res) => {
    try {

        const { name, address, mail, age, bank, bankaccount, email } = req.body;
        //Start a new session
        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ email }).session(session);

        if (!user) throw new Error("User not found!");

        const newAccount = await Accounts.create({
            name, address, mail, age, bank, bankaccount, creator: user._id
        });

        user.allAccounts.push(newAccount._id);
        await user.save({ session });

        await session.commitTransaction();

        res.status(200).json({ message: "Account created successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


export {
    getAccountDetails,
    createAccount
}