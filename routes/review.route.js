const {Router} = require("express");
const verifyToken = require("../middleware/jwt.js");
const {
  createReview,
  getReviews,
  deleteReview,
} =require("../controllers/review.controller");

const router =Router();

router.post("/", verifyToken, createReview )
router.get("/:gigId", getReviews )
router.delete("/:id", deleteReview)

module.exports= router;
