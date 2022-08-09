const { ObjectId } = require("mongodb");

const { Post, Thema, Expereince, subexpereince } = require("../model");

const { fetchSinglePost } = require("./common");
const moment = require("moment-timezone");

const uploadPost = async (req, res) => {
  try {
    console.log(req.body);

    const {
      Isincognito,
      userId,
      symptons_id,
      means_thearay_id,
      whatHelped,
      own_experience,
      rating,
      professional_other,

      timeZone,
      dateTime,
    } = req.body;

    req.body.dateTime = moment.tz(dateTime, timeZone);

    req.body.dateCreated = moment.tz(dateTime, timeZone);

    req.body.symptons_id = ObjectId(req.body.symptons_id);

    req.body.userId = ObjectId(req.body.userId);

    if (req.body.means_thearay_id != "") {
      const oldexp = await Post.findOne({
        $and: [
          { symptons_id: req.body.symptons_id },
          { means_thearay_id: ObjectId(req.body.means_thearay_id) },
        ],
      });

      if (oldexp) {
        const ex = await Expereince.create({
          userId: ObjectId(req.body.userId),
          postId: ObjectId(oldexp._id),
          sympId: ObjectId(oldexp.symptons_id),
          expereince: own_experience,
          rating: rating,
          Isincognito: Isincognito,
          timeZone: timeZone,
          dateTime: req.body.dateTime,
        });

        return res.status(200).json({ status: true, data: oldexp });
      }
    }

    req.body.means_thearay_id =
      req.body.means_thearay_id == ""
        ? ObjectId("6216619e6c52ca2390dab9d4")
        : ObjectId(req.body.means_thearay_id);

    const post = await Post.create(req.body);

    const ex = await Expereince.create({
      userId: ObjectId(req.body.userId),
      postId: ObjectId(post._id),
      sympId: ObjectId(post.symptons_id),
      expereince: own_experience,
      rating: rating,
      Isincognito: Isincognito,
      timeZone: timeZone,
      dateTime: req.body.dateTime,
    });

    return res.status(200).json({ status: true, data: post });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const uploadParentComment = async (req, res) => {
  try {
    console.log(req.body);

    const {
      Isincognito,
      userId,
      postId,
      symptons_id,
      own_experience,
      rating,

      timeZone,
      dateTime,
    } = req.body;

    req.body.dateTime = moment.tz(dateTime, timeZone);

    const oldPost = await Post.findOne({ _id: ObjectId(req.body.postId) });

    const oldExp = await Expereince.findOne({
      $and: [
        { userId: ObjectId(req.body.userId) },

        { postId: ObjectId(postId) },
        {},
      ],
    });

    if (oldExp) {
      return res
        .status(400)
        .json({ message: "Your Expereinece Already Exist" });
    } else {
      const filter = { _id: ObjectId(req.body.postId) };
      const update = {
        dateTime: req.body.dateTime,
      };

      let doc = await Post.findOneAndUpdate(filter, update);

      const ex = await Expereince.create({
        userId: ObjectId(req.body.userId),
        Isincognito: Isincognito,
        postId: ObjectId(postId),
        sympId: ObjectId(oldPost.symptons_id),
        expereince: own_experience,
        rating: rating,
        timeZone: timeZone,
        dateTime: req.body.dateTime,
      });

      let newPost = await fetchSinglePost(req.body.postId);

      return res.status(200).json({ status: true, data: newPost });
    }
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const uploadChildComment = async (req, res) => {
  try {
    console.log(req.body.postId);

    const {
      Isincognito,
      userId,
      postId,
      Id,
      own_experience,

      timeZone,
      dateTime,
    } = req.body;

    const ex = await subexpereince.create({
      userId: ObjectId(req.body.userId),
      Isincognito: Isincognito,
      expereinceId: ObjectId(Id),
      expereince: own_experience,

      timeZone: timeZone,
      dateTime: req.body.dateTime,
    });

    /// let newPost = await Post.findOne({ _id: ObjectId(req.body.postId) });

    let newPost = await fetchSinglePost(req.body.postId);

    return res.status(200).json({ status: true, data: newPost });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const getAllPostsByDiseaseId = async (req, res) => {
  // console.log(req.params);

  // console.log(req.params);

  // let match =
  //   req.params.diseaseId == null || req.params.diseaseId == "null"
  //     ? {}
  //     : { symptons_id: ObjectId(req.params.diseaseId) };

  try {
    let Fetch = await Post.aggregate([
      {
        $match: { symptons_id: ObjectId(req.params.diseaseId) },
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
            { $sort: { _id: -1 } },
          ],
          as: "expereince",
        },
      },

      { $unset: ["user.pass"] },
    ]);

    return res.status(200).json({ status: true, data: Fetch });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const getOnePost = async (req, res) => {
  // console.log(req.params);

  // console.log(req.params);

  // let match =
  //   req.params.diseaseId == null || req.params.diseaseId == "null"
  //     ? {}
  //     : { symptons_id: ObjectId(req.params.diseaseId) };

  try {
    let Fetch = await Post.aggregate([
      {
        $match: { _id: ObjectId(req.params.postId) },
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
            { $sort: { _id: -1 } },
          ],
          as: "expereince",
        },
      },

      { $unset: ["user.pass"] },
    ]);

    return res.status(200).json({ status: true, data: Fetch });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    console.log(req.params.counter);

    let Fetch = await Post.aggregate([
      { $sort: { dateTime: -1 } },
      {
        $match: {},
      },

      { $skip: parseInt(req.params.counter) },
      { $limit: 1 },

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
                from: "likeshistories",
                localField: "_id",
                foreignField: "expId",

                as: "alllikes",
              },
            },
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
            { $sort: { _id: -1 } },
          ],
          as: "expereince",
        },
      },

      { $unset: ["user.pass"] },
    ]);
    console.log(Fetch);

    return res.status(200).json({ status: true, data: Fetch });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const addTheme = async (req, res) => {
  try {
    console.log(req.body);

    req.body.userId = ObjectId(req.body.userId);

    req.body.symptons_id = ObjectId(req.body.symptons_id);

    const user = await Thema.create(req.body);

    return res.status(200).json({ status: true, data: user });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const DeleteTheme = async (req, res) => {
  try {
    console.log(req.body);

    let Fetch = await Thema.deleteOne({
      $and: [
        { symptons_id: ObjectId(req.body.Id) },
        { userId: ObjectId(req.body.userId) },
      ],
    });

    return res.status(200).json({ status: true, data: "deleted" });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const getThemeByUserId = async (req, res) => {
  try {
    console.log(req.params);

    let Fetch = await Thema.aggregate([
      {
        $match: { userId: ObjectId(req.params.userId) },
      },

      { $sort: { _id: -1 } },
      // {
      //   $lookup: {
      //     from: "users",
      //     localField: "userId",
      //     foreignField: "_id",
      //     as: "user",
      //   },
      // },

      // { $unwind: "$user" },

      {
        $lookup: {
          from: "diseases",
          localField: "symptons_id",
          foreignField: "_id",
          as: "symptons",
        },
      },

      { $unwind: "$symptons" },
    ]);

    return res.status(200).json({ status: true, data: Fetch });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};
module.exports = {
  uploadPost, ////req UserId
  getOnePost,
  getAllPostsByDiseaseId,
  getAllPosts,
  addTheme, ////req UserId
  getThemeByUserId,
  DeleteTheme,
  uploadParentComment, ////req UserId
  uploadChildComment, ////req UserId
};
