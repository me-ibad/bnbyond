const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema({
  shareId: { type: String, required: true },
  url: { type: String, required: true },
});

module.exports = mongoose.model("Share", shareSchema);
