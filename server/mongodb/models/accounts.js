import mongoose from "mongoose";

const AccountsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    mail: { type: String, required: true },
    age: { type: Number, required: true },
    bank: { type: String, required: true },
    bankaccount: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

})

const accountModel = mongoose.model("Accounts", AccountsSchema);

export default accountModel;