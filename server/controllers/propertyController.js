const { ObjectId } = require("mongodb");

const {
  Post,
  Thema,
  Expereince,
  subexpereince,
  Property,
  User,
} = require("../model");

const { fetchSinglePost } = require("./common");
const moment = require("moment-timezone");

const uploadProperty = async (req, res) => {
  try {
    let propertyPics = [];

    req.files.map((item) => {
      propertyPics.push(item.filename);
    });

    let amenities = req.body.amenities.map((item) => {
      return JSON.parse(item);
    });

    req.body.amenities = amenities;

    let characteristics = req.body.characteristics.map((item) => {
      return JSON.parse(item);
    });

    req.body.characteristics = characteristics;

    req.body.userId = ObjectId(req.body.userId);

    req.body.pics = propertyPics;

    req.body.loc = {
      type: "Point",
      coordinates: [parseFloat(req.body.long), parseFloat(req.body.lat)],
    };

    let newProperty = await Property.create(req.body);

    return res.status(200).json({
      status: true,
      data: "completed",
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const getAllProperty = async (req, res) => {
  const { lat, long, km } = req.params;

  let Fetch;

  if (lat != "0") {
    Fetch = await Property.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [
              parseFloat(req.params.long),
              parseFloat(req.params.lat),
            ],
          },
          distanceField: "dist.calculated",
          maxDistance: parseInt(km),
          //// query: { category: "Parks" },
          /// includeLocs: "dist.location",
          spherical: true,
        },
      },

      {
        $match: {},
      },

      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },

      { $unwind: "$user" },

      { $unset: ["user.pass"] },
    ]);
  } else {
    Fetch = await Property.aggregate([
      {
        $match: {},
      },

      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },

      { $unwind: "$user" },

      { $unset: ["user.pass"] },
    ]);
  }

  return res.status(200).json({ status: true, data: Fetch });
};

const getPropertyByUserId = async (req, res) => {
  const { userId } = req.params;

  let Fetch = await Property.aggregate([
    {
      $match: { userId: ObjectId(userId) },
    },

    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },

    { $unwind: "$user" },

    { $unset: ["user.pass"] },
  ]);

  return res.status(200).json({ status: true, data: Fetch });
};

const getPropertyByPropertyId = async (req, res) => {
  const { Id } = req.params;

  let Fetch = await Property.aggregate([
    {
      $match: { _id: ObjectId(Id) },
    },

    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },

    { $unwind: "$user" },

    { $unset: ["user.pass"] },
  ]);

  return res.status(200).json({ status: true, data: Fetch });
};

module.exports = {
  uploadProperty,
  getAllProperty,
  getPropertyByUserId,
  getPropertyByPropertyId,
};
