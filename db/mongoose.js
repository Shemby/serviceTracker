const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(
  process.env.SERVER,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("Connected to Mongo!");
  }
);
