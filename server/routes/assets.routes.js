import express from "express";


import {
    getAssetDetails,
    createAsset
} from "../controllers/assets.controller.js";

const router = express.Router();

router.route("/").get(getAssetDetails);

router.route("/").post(createAsset);

export default router;