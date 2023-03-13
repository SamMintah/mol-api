const { Router } = require("express");
const {
  createConversation,
  getAllConversations,
  getConversation,
  updateConversation,
} = require("../controllers/conversation.controller");
const verifyToken = require("../middleware/jwt.js");

const router = Router();

router.get("/", verifyToken, getAllConversations);
router.post("/", verifyToken, createConversation);
router.get("/single/:id", verifyToken, getConversation);
router.put("/:id", verifyToken, updateConversation);

module.exports = router;
