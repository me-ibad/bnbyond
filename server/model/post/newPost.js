const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  Isincognito: { type: Boolean },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  symptons_id: { type: mongoose.Schema.Types.ObjectId },
  means_thearay_id: { type: mongoose.Schema.Types.ObjectId },
  whatHelped: { type: String },

  timeZone: { type: String },

  dateTime: { type: Date },
  dateCreated: { type: Date },

  own_experience: { type: String },
  rating: { type: Number },

  professional_other: { type: Object },

  link: { type: String },
  linkName: { type: String },
});

module.exports = mongoose.model("post", postSchema);
