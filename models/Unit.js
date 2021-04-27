const mongoose = require("mongoose");

const unitSchema = mongoose.Schema({
  sn: {
    type: String,
    required: true,
    unique: true,
  },
  installDate: {
    type: Date,
  },
  serviceRecords: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Record",
    },
  ],
});

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;
