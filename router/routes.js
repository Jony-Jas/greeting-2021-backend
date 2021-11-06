const express = require("express");
const router = express.Router();
const Greeting = require("../models/greeting");
const auth = require("../middleware/auth");

router.post("/create", auth, async (req, res) => {
  const greeting = req.body;
  try {
    const greet = await Greeting.findOne({ name: greeting.name });
    if (greet) {
      return res.send(greet);
    }
    const response = await Greeting.create(greeting);
    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", auth, async (req, res) => {
  const id = req.params.id;
  try {
    const greet = await Greeting.findById(id);
    if (!greet) {
      throw new Error(`User not found`);
    }
    res.send({ greeting: greet.getPublicMessage() });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
