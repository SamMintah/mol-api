const {Router} = require("express");
const { deleteUser, getUser } =require("../../controllers/user.controller");
const verifyToken = require("../../middleware/jwt.js");

const router = Router();

router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", getUser);

module.exports= router;
