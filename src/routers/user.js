const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");

const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    const token = await user.generateAuthToken();
    await user.save();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send();
  }
});

router.get("/users/me", auth, async (req, res) => {
  res.status(200).send(req.user);
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) return res.status(404).send("User not found");
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send();
  }
});

router.patch("/users/:id", async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);

  const allowedUpdates = ["name", "email", "password", "age"];

  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    res.status(400).send({ error: "Invalid updates!" });
  }

  //  const { name, age } = req.body;

  try {
    const user = await User.findById(_id);

    updates.forEach(update => (user[update] = req.body[update]));

    await user.save();

    if (!user) return res.status(404).send("User not found");

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send("Error");
  }
});

router.delete("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(_id);

    if (!user) return res.status(404).send("User not found");

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
