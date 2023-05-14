const express = require("express");
const router = express.Router();
// const authMiddleware = require("../middlewares/auth-middleware");

const LikesController = require("../controllers/likes.controller");
const likesController = new LikesController();

router.put(
  "/post_id/likes",
  // authMiddleWare,
  likesController.postLikeToggle
);

router.put(
  "/post_id/comments/comment_id/likes",
  // authMiddleWare,
  likesController.commentLikeToggle
);

module.exports = router;
