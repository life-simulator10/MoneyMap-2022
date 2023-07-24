import express from "express";

import {
    getNepseFeed
} from "../controllers/stocklive.controller.js";

const router = express.Router();

router.route("/").get(getNepseFeed);

export default router;