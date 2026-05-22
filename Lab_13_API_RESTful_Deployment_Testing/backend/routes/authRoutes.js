const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");

router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    password: hashedPassword,
    role
  });
  res.json({ message: "User registered", user });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ message: "User not found" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Wrong password" });
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
  res.json({ accessToken: token });
});

router.get("/users", auth("admin"), async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

module.exports = router;