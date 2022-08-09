const { Router } = require("express");

const { checkApiKey } = require("../middleware");

module.exports = (SocialController) => {
  const SocialRouter = new Router();

  SocialRouter.post("/updatelike", checkApiKey, SocialController.updateLike);

  SocialRouter.post(
    "/updateaffected",
    checkApiKey,
    SocialController.updateAffected
  );

  return SocialRouter;
};
