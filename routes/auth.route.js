const { Router } = require("express");
const { login, logout, register } = require("../controllers/auth.controller");

const authRoute = Router();

authRoute
  .post("/login", login)
  .post("/register", register)
  .post("/logout", logout);


module.exports = authRoute;