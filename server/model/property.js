const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  amenities: { type: Array },

  characteristics: { type: Array },
  pics: { type: Array },

  points: { type: Number },
  price: { type: Number },

  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },

  address: { type: String },

  propertyType: { type: String },

  spaceType: { type: String },
  title: { type: String },
  userCurrency: { type: String },
  loc: {
    type: Object,
  },
});

propertySchema.index({ loc: '2dsphere' });

module.exports = mongoose.model('property', propertySchema);
