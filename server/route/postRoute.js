const { Router } = require("express");

const { checkApiKey } = require("../middleware");

module.exports = (PostController) => {
  const postRouter = new Router();

  postRouter.post(
    "/uploadPost",

    PostController.uploadPost
  );

  postRouter.post(
    "/uploadParentComment",
    checkApiKey,
    PostController.uploadParentComment
  );

  postRouter.post(
    "/uploadChildComment",
    checkApiKey,
    PostController.uploadChildComment
  );

  postRouter.post("/addthema", checkApiKey, PostController.addTheme);

  postRouter.post(
    "/deleteThema",

    PostController.DeleteTheme
  );

  postRouter.get(
    "/getAllPost/:counter",

    PostController.getAllPosts
  );

  postRouter.get(
    "/getAllPostByDiseaseId/:diseaseId",

    PostController.getAllPostsByDiseaseId
  );

  postRouter.get(
    "/getOnePost/:postId",

    PostController.getOnePost
  );

  postRouter.get(
    "/getThemeByUserid/:userId",

    PostController.getThemeByUserId
  );

  return postRouter;
};
