const express = require("express");
const Model = require("../models/Model");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/user/models", async (req, res) => {
  const model = new Model(req.body);
  console.log(model);
  try {
    await model.save();
    res.status(201).send({ model });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
