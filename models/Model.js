const mongoose = require("mongoose");

const modelSchema = mongoose.Schema({
  mn: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  refrigerant: {
    type: String,
    required: true,
  },
  charge: {
    type: Number,
    required: true,
  },
  capacitor: {
    type: String,
    required: true,
  },
  belt: {
    type: String,
    required: true,
  },
});

const Model = mongoose.model("Model", modelSchema);

module.exports = Model;
