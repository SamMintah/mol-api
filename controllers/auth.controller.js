const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const createError = require("../utils/createError.js");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const isExist = await User.findOne({ email: req.body.email });
    if (isExist) {
      return next(createError(409, "user already exists"));
    }
    const hash = bcrypt.hashSync(req.body.password, 10);

    const newUser = new User({
      username: req.body.username, // explicitly set username field
      email: req.body.email,
      password: hash,
      phone: req.body.phone,
      country: req.body.country,
      isSeller: req.body.isSeller,
    });

    await newUser.save();
    const { password, ...info } = newUser._doc;

    res.status(201).json({
      message: "User has been created.",
      user: info,
    });
  } catch (err) {
    next(err);
  }
};


const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong Credentials!"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};

module.exports = { register, login, logout };
