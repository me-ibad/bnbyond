const { Router } = require("express");

module.exports = (sharePostController) => {
  const sharePost = new Router();

  sharePost.get("/sharePost", sharePostController.sharePost);

  sharePost.get("/shareDisease", sharePostController.shareDisease);

  return sharePost;
};
