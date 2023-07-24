import express from "express";

import { createPosts, deletePosts, getAllPosts, getPostsDetail, updatePosts } from "../controllers/posts.controller.js";

const router = express.Router();

router.route("/").get(getAllPosts);
router.route("/:id").get(getPostsDetail);
router.route("/").post(createPosts);
router.route("/:id").patch(updatePosts);
router.route("/:id").delete(deletePosts);

export default router;