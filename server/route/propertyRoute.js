const { Router } = require('express');

const { checkApiKey } = require('../middleware');
const upload = require('../middleware/upload');
module.exports = (PlacesController) => {
  const placespostRouter = new Router();

  placespostRouter.post(
    '/uploadProperty',
    upload.array('pics'),

    PlacesController.uploadProperty
  );

  placespostRouter.post(
    '/uploadParentComment',
    checkApiKey,
    PlacesController.uploadParentComment
  );

  placespostRouter.post(
    '/uploadChildComment',
    checkApiKey,
    PlacesController.uploadChildComment
  );

  placespostRouter.post('/addthema', checkApiKey, PlacesController.addTheme);

  placespostRouter.post(
    '/deleteThema',

    PlacesController.DeleteTheme
  );

  placespostRouter.get(
    '/getAllPost/:counter',

    PlacesController.getAllPosts
  );

  placespostRouter.get(
    '/getAllPostByDiseaseId/:diseaseId',

    PlacesController.getAllPostsByDiseaseId
  );

  placespostRouter.get(
    '/getOnePost/:postId',

    PlacesController.getOnePost
  );

  placespostRouter.get(
    '/getThemeByUserid/:userId',

    PlacesController.getThemeByUserId
  );

  return placespostRouter;
};
