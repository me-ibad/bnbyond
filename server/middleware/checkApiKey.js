const { ObjectId } = require('mongodb');
const { User } = require('../model');

const checkApiKey = async (req, res, next) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(403).json({
        message: 'Bitte anmelden um interagieren zu können',
      });
    }

    const userInfo = await User.findOne({
      _id: ObjectId(userId),
    });

    console.log('userInfo', userInfo);

    if (!userInfo) {
      return res.status(403).json({
        message: 'Invalid User Key provided',
      });
    }

    // console.log("userInfo", userInfo);

    // if (!(userInfo.apiPlanInfo.apiUsage - 1)) {
    //   console.log("hello");
    //   await User.updateMany(
    //     { parentAccountID: userInfo._id },
    //     {
    //       $set: { "apiPlanInfo.apiUsage": 0 },
    //     }
    //   );
    // }

    // //updating user
    // await User.updateOne(
    //   { apiKey: { $elemMatch: { apiKey: api_key } } },
    //   {
    //     $set: { "apiPlanInfo.apiUsage": userInfo.apiPlanInfo.apiUsage - 1 },
    //   }
    // );

    // console.log("userInfo", userInfo);

    return next();
  } catch {
    console.log('In middle');
    return res.status(403).json({
      message: 'Error Occur while Acess Token',
    });
  }
};

module.exports = checkApiKey;
