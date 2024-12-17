import config from "../config/config.js";
import User from "../model/User.js";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
const signupController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.status(400).json({ message: "Email already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: "User created successfully" });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user._id }, config.jwt_secret, {
    expiresIn: "7d",
  });
  res.status(200).json({ token });
};

export { signupController, loginController };
