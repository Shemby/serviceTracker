const mongoose = require("mongoose");

const recordSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Sheet", recordSchema);
