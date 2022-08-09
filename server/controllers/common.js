const { ObjectId } = require("mongodb");

const { Post, Thema, Expereince, subexpereince } = require("../model");

const moment = require("moment-timezone");

module.exports.fetchSinglePost = async function (postId) {
  let newPost = await Post.aggregate([
    {
      $match: { _id: ObjectId(postId) },
    },

    { $sort: { dateTime: -1 } },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },

    { $unwind: "$user" },

    {
      $lookup: {
        from: "diseases",
        localField: "symptons_id",
        foreignField: "_id",
        as: "symptons",
      },
    },

    { $unwind: "$symptons" },

    {
      $lookup: {
        from: "treatments",
        localField: "means_thearay_id",
        foreignField: "_id",
        as: "means_thearay",
      },
    },

    {
      $lookup: {
        from: "expereinces",
        localField: "_id",
        foreignField: "postId",

        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "userId",
              foreignField: "_id",

              as: "user",
            },
          },

          {
            $lookup: {
              from: "subexpereinces",
              localField: "_id",
              foreignField: "expereinceId",

              pipeline: [
                {
                  $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",

                    as: "user",
                  },
                },
              ],

              as: "subcomments",
            },
          },
        ],
        as: "expereince",
      },
    },

    { $unset: ["user.pass"] },
  ]);

  return newPost;
};
