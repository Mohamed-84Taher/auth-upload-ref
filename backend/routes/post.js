const express = require("express");
const isAuth = require("../middleware/isAuth");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Post = require("../models/Post");

router.post(
  "/",
  isAuth,
  [body("text", "text is required").notEmpty()],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }
    const { text } = req.body;
    try {
      const post = new Post({
        text,
        userId: req.user.id,
      });
      await post.save();
      res.send(post);
    } catch (error) {
      res.status(500).send("server error");
    }
  }
);
router.get("/", isAuth, async (req, res) => {
  try {
    const posts = await Post.find().populate("userId", ["name"]);
    res.send(posts);
  } catch (error) {
    res.status(500).send("server error");
  }
});

module.exports = router;
