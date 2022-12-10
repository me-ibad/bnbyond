const { Router } = require("express");

const { checkApiKey } = require("../middleware");
const upload = require("../middleware/upload");
module.exports = (PlacesController) => {
  const placespostRouter = new Router();

  placespostRouter.post(
    "/uploadProperty",
    upload.array("pics"),

    PlacesController.uploadProperty
  );

  placespostRouter.get(
    "/getAllProperty/:lat/:long/:km",

    PlacesController.getAllProperty
  );

  placespostRouter.get(
    "/getPropertyByUserId/:userId",

    PlacesController.getPropertyByUserId
  );

  placespostRouter.get(
    "/getPropertyByPropertyId/:Id",

    PlacesController.getPropertyByPropertyId
  );

  // placespostRouter.get(
  //   '/getThemeByUserid/:userId',

  //   PlacesController.getThemeByUserId
  // );

  return placespostRouter;
};
