import express from "express";

import {
    getAccountDetails, createAccount
} from "../controllers/accounts.controller.js";

const router = express.Router();

router.route("/").get(getAccountDetails);

router.route("/").post(createAccount);

export default router;